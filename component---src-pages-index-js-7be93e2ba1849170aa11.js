(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{228:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return g});var n=a(20),r=a.n(n),o=a(0),i=a.n(o),c=a(232),u=a(252),s=a.n(u),l=a(248),d=a.n(l),p=a(245),m=a(247),f=a(231),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.site.siteMetadata.description"),a=s()(this,"props.data.allMarkdownRemark.edges");return i.a.createElement(m.a,{location:this.props.location},i.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),i.a.createElement(p.a,null),a.map(function(e){var t=e.node,a=s()(t,"frontmatter.title")||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(f.a)(.25)}},i.a.createElement(c.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(i.a.Component);t.default=h;var g="3352422197"},231:function(e,t,a){"use strict";a.d(t,"a",function(){return u}),a.d(t,"b",function(){return s});var n=a(258),r=a.n(n),o=a(259),i=a.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a),u=c.rhythm,s=c.scale},232:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),o=a(15),i=a.n(o),c=a(230),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(233),l=a.n(s);a.d(t,"PageRenderer",function(){return l.a});var d=a(51);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},233:function(e,t,a){var n;e.exports=(n=a(240))&&n.default||n},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),c=a(70),u=a(1),s=function(e){var t=e.location,a=u.a.getResourcesForPathname(t.pathname);return r.a.createElement(c.a,{location:t,pageResources:a})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},245:function(e,t,a){"use strict";var n=a(20),r=a.n(n),o=a(0),i=a.n(o),c=(a(256),a(257),a(246)),u=a.n(c),s=a(231),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(2.5)}},i.a.createElement("img",{src:u.a,alt:"Joaquín Bravo Contreras",style:{marginRight:Object(s.a)(.5),marginBottom:0,width:Object(s.a)(2),height:Object(s.a)(2)}}),i.a.createElement("p",null,"Soy un desarrollador mexicano. Soy fan del software libre, sobre todo aplicado al Internet. Juego futbol cada que puedo. Me gusta andar en bici y leer (cuando mis hijos me dejan). Todavía creo en la buena voluntad de las personas y todavía más con mi linda esposa Lix =)."))},t}(i.a.Component);t.a=l},246:function(e,t,a){e.exports=a.p+"static/gaceta_1-8317597491b9f25a784953e16a2a29cc.png"},247:function(e,t,a){"use strict";a(74);var n=a(20),r=a.n(n),o=a(0),i=a.n(o),c=a(232),u=a(231),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.children;return e="/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.5),{marginBottom:Object(u.a)(1.5),marginTop:0})},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"La gaceta de la cabeza")):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(u.a)(-1)}},i.a.createElement(c.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},"La gaceta de la cabeza")),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)}},e,n)},t}(i.a.Component);t.a=s}}]);
//# sourceMappingURL=component---src-pages-index-js-7be93e2ba1849170aa11.js.map