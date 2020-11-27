require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  const Routee = require("./router").default;
  const Sitemap = require("react-router-sitemap").default;

  var path = require('path');
  const sitemapdir = path.join(__dirname, 'sitemap');

  function generateSitemap() { 
      return (
        new Sitemap(Routee)
            .build("https://www.cafsed.org")
            .save(sitemapdir+'/sitemap.xml')
      );
  }
  
  generateSitemap();