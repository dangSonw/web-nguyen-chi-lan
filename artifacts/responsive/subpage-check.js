async page => {
  const routes = ['/photography', '/photography/flowers', '/photography/portrait', '/photography/street-photography', '/filmmaking', '/music', '/dance-performance', '/art', '/community'];
  const sizes = [[320,568],[390,844],[844,390],[768,1024],[1024,768],[1440,900],[1920,1080],[3440,1440]];
  const results = [];
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  await page.addInitScript(() => sessionStorage.setItem('spa_session_started', 'true'));
  for (const [width,height] of sizes) {
    await page.setViewportSize({width,height});
    for (const route of routes) {
      await page.goto('http://127.0.0.1:5174' + route);
      await page.locator('.main-content').waitFor();
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(250);
      const data = await page.evaluate(() => {
        const all = Array.from(document.querySelectorAll('.main-content *, .sidebar-nav a'));
        const overflow = all.filter(el => {
          const r = el.getBoundingClientRect(), s = getComputedStyle(el);
          return r.width && r.height && s.visibility !== 'hidden' && s.display !== 'none' && (r.left < -1 || r.right > innerWidth + 1);
        }).map(el => ({tag:el.tagName,class:el.className,text:el.textContent.slice(0,60)}));
        const main=document.querySelector('.main-content');
        return {route:location.pathname, docOverflow:document.documentElement.scrollWidth>innerWidth+1, overflow, mainOverflow:main.scrollWidth>main.clientWidth+1,
          smallestBody: Math.min(...Array.from(main.querySelectorAll('p')).map(el=>parseFloat(getComputedStyle(el).fontSize))),
          brokenImages:Array.from(main.querySelectorAll('img')).filter(el=>el.complete && !el.naturalWidth).map(el=>el.src),
          navTargets:Array.from(document.querySelectorAll('.sidebar-nav a')).map(el=>el.getBoundingClientRect().height)};
      });
      results.push({width,height,requestedRoute:route,...data});
      if ((width===320 || width===1440) && ['/photography','/dance-performance','/art','/photography/portrait'].includes(route)) {
        await page.screenshot({path:'D:/Web/web-nguyen-chi-lan/artifacts/responsive/subpage-'+route.replace(/\//g,'-')+'-'+width+'.png',fullPage:true});
      }
    }
  }
  return {browser:await page.context().browser().version(),checks:results.length,errors,failures:results.filter(x=>x.docOverflow||x.overflow.length||x.brokenImages.length||x.mainOverflow),results};
}
