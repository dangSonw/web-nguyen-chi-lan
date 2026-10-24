async page => {
  const checks = [];
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  await page.addInitScript(() => sessionStorage.setItem('spa_session_started', 'true'));
  for (const [width,height] of [[600,800],[601,800],[720,900],[800,600],[880,800],[881,800],[1080,1920],[2560,1440],[3840,2160]]) {
    await page.setViewportSize({width,height});
    for (const route of ['/photography','/dance-performance','/art','/photography/portrait']) {
      await page.goto('http://127.0.0.1:5174'+route);
      await page.locator('.main-content').waitFor();
      await page.evaluate(()=>document.fonts.ready);
      await page.waitForTimeout(250);
      const fitting=await page.locator('.main-content').evaluate(el=>el.scrollWidth<=el.clientWidth+1);
      checks.push({test:'breakpoint-fit',width,height,route,passed:fitting});
    }
  }
  for (const [width,height] of [[320,568],[1440,900]]) {
    await page.setViewportSize({width,height});
    for (const [route,active] of [['flowers','.flower-slide.active'],['street-photography','.showcase-slide.active'],['portrait','.portrait-photo.active']]) {
      await page.goto('http://127.0.0.1:5174/photography/'+route);
      await page.locator('.main-content').waitFor();
      const initial=await page.locator(active).evaluate(el=>el.getAttribute('src')||el.querySelector('img').getAttribute('src'));
      await page.getByRole('button',{name:/next photo/i}).click();
      const next=await page.locator(active).evaluate(el=>el.getAttribute('src')||el.querySelector('img').getAttribute('src'));
      await page.keyboard.press('ArrowLeft');
      const back=await page.locator(active).evaluate(el=>el.getAttribute('src')||el.querySelector('img').getAttribute('src'));
      checks.push({test:'gallery-next-keyboard-back',width,route,passed:initial!==next&&back===initial});
      if(route==='portrait') {
        await page.getByRole('button',{name:'photoshoot 2'}).click();
        checks.push({test:'portrait-second-shoot',width,passed:await page.locator('.portrait-photo').count()===8});
      }
    }
    await page.goto('http://127.0.0.1:5174/music');
    await page.locator('.video-launch').first().focus();
    await page.keyboard.press('Enter');
    checks.push({test:'keyboard-video-launch',width,passed:await page.locator('iframe').count()===1});
  }
  await page.setViewportSize({width:390,height:844});
  await page.goto('http://127.0.0.1:5174/art');
  await page.locator('.art-girls-cutout').scrollIntoViewIfNeeded();
  checks.push({test:'cutout-stays-on-balloon-artwork',passed:await page.locator('.art-girls-cutout').evaluate(el=>el.parentElement.className==='art-col-left'&&el.getBoundingClientRect().bottom<=el.parentElement.getBoundingClientRect().bottom+1)});
  await page.screenshot({path:'D:/Web/web-nguyen-chi-lan/artifacts/responsive/art-balloon-mobile.png'});
  await page.emulateMedia({reducedMotion:'reduce'});
  checks.push({test:'reduced-motion',passed:await page.locator('.cutout-img').first().evaluate(el=>parseFloat(getComputedStyle(el).transitionDuration)<0.001)});
  return {checks:checks.length,errors,failures:checks.filter(x=>!x.passed),results:checks};
}
