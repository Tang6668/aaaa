import{_ as s,c as n,o as a,a as l}from"./app.088e8e71.js";const i=JSON.parse('{"title":"\u9879\u76EE\u90E8\u7F72 | docker+nginx\u90E8\u7F72","description":"\u4F7F\u7528docker+nginx\u4E00\u952E\u90E8\u7F72balzeb2\u56FE\u5E8A\u9879\u76EE","frontmatter":{"lang":"zh-cn","title":"\u9879\u76EE\u90E8\u7F72 | docker+nginx\u90E8\u7F72","description":"\u4F7F\u7528docker+nginx\u4E00\u952E\u90E8\u7F72balzeb2\u56FE\u5E8A\u9879\u76EE"},"headers":[{"level":2,"title":"\u9879\u76EE\u6587\u4EF6\u7ED3\u6784","slug":"\u9879\u76EE\u6587\u4EF6\u7ED3\u6784","link":"#\u9879\u76EE\u6587\u4EF6\u7ED3\u6784","children":[]},{"level":2,"title":"Step. 1: \u73AF\u5883\u5B89\u88C5","slug":"step-1-\u73AF\u5883\u5B89\u88C5","link":"#step-1-\u73AF\u5883\u5B89\u88C5","children":[]},{"level":2,"title":"Step. 2: \u62C9\u53D6\u4EE3\u7801","slug":"step-2-\u62C9\u53D6\u4EE3\u7801","link":"#step-2-\u62C9\u53D6\u4EE3\u7801","children":[]},{"level":2,"title":"Step. 3: \u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\u4FE1\u606F","slug":"step-3-\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\u4FE1\u606F","link":"#step-3-\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\u4FE1\u606F","children":[]},{"level":2,"title":"Step. 4: \u8FD0\u884C\u9879\u76EE","slug":"step-4-\u8FD0\u884C\u9879\u76EE","link":"#step-4-\u8FD0\u884C\u9879\u76EE","children":[]},{"level":2,"title":"Step. 5: \u914D\u7F6Enginx","slug":"step-5-\u914D\u7F6Enginx","link":"#step-5-\u914D\u7F6Enginx","children":[]}],"relativePath":"guide/deploy/docker.md"}'),p={name:"guide/deploy/docker.md"},o=l(`<h1 id="\u57FA\u4E8Edocker-nginx-\u90E8\u7F72" tabindex="-1">\u57FA\u4E8Edocker + nginx \u90E8\u7F72 <a class="header-anchor" href="#\u57FA\u4E8Edocker-nginx-\u90E8\u7F72" aria-hidden="true">#</a></h1><h2 id="\u9879\u76EE\u6587\u4EF6\u7ED3\u6784" tabindex="-1">\u9879\u76EE\u6587\u4EF6\u7ED3\u6784 <a class="header-anchor" href="#\u9879\u76EE\u6587\u4EF6\u7ED3\u6784" aria-hidden="true">#</a></h2><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">\u2514\u2500static  </span><span style="color:#676E95;">// \u5B58\u653E\u9759\u6001\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500css</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500fonts</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u251C\u2500img</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2502  \u2514\u2500icons</span></span>
<span class="line"><span style="color:#A6ACCD;">    \u2514\u2500js</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">py  </span><span style="color:#676E95;">// \u9879\u76EE\u542F\u52A8\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500Procfile  </span><span style="color:#676E95;">// Heroku\u542F\u52A8\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500requirements</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">txt </span><span style="color:#676E95;">//\u9879\u76EE\u4F9D\u8D56\u5E93</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500scf_bootstrap  </span><span style="color:#676E95;">// \u817E\u8BAF\u4E91\u90E8\u7F72\u542F\u52A8\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500docker</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">compose</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">yml  </span><span style="color:#676E95;">// Docker\u542F\u52A8\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500Dockerfile  </span><span style="color:#676E95;">// docker\u76F8\u5173\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;">\u2514\u2500gun</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">conf  </span><span style="color:#676E95;">// \u4FDD\u969C\u7A0B\u5E8F\u8FD0\u884C</span></span>
<span class="line"></span></code></pre></div><h2 id="step-1-\u73AF\u5883\u5B89\u88C5" tabindex="-1">Step. 1: \u73AF\u5883\u5B89\u88C5 <a class="header-anchor" href="#step-1-\u73AF\u5883\u5B89\u88C5" aria-hidden="true">#</a></h2><ul><li>docker \u5B89\u88C5 \u3010<a href="https://blog.csdn.net/weixin_40118894/article/details/117221102" target="_blank" rel="noreferrer">\u4F20\u9001</a>\u3011</li></ul><h2 id="step-2-\u62C9\u53D6\u4EE3\u7801" tabindex="-1">Step. 2: \u62C9\u53D6\u4EE3\u7801 <a class="header-anchor" href="#step-2-\u62C9\u53D6\u4EE3\u7801" aria-hidden="true">#</a></h2><ul><li>\u62C9\u53D6\u4EE3\u7801\u5230\u670D\u52A1\u7AEF</li></ul><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// github</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">b build </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;">//github.com/Rr210/blazeB2.git</span></span>
<span class="line"><span style="color:#676E95;">// gitee</span></span>
<span class="line"><span style="color:#A6ACCD;">git clone </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">b build </span><span style="color:#FFCB6B;">https</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;">//gitee.com/rbozo/blazeB2.git</span></span>
<span class="line"></span></code></pre></div><h2 id="step-3-\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\u4FE1\u606F" tabindex="-1">Step. 3: \u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\u4FE1\u606F <a class="header-anchor" href="#step-3-\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\u4FE1\u606F" aria-hidden="true">#</a></h2><ul><li>\u6253\u5F00 <code>docker-compose.yml</code> \u6587\u4EF6\u4FEE\u6539\u6620\u5C04\u7AEF\u53E3\u53F7</li></ul><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FFCB6B;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">flask_test</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flask</span><span style="color:#89DDFF;">-</span><span style="color:#FFCB6B;">test</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1.0</span><span style="color:#A6ACCD;"> # \u751F\u6210\u7684\u955C\u50CF\u7684\u540D\u79F0 \u548C tag</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> # \u4E00\u952E\u6784\u5EFA\u955C\u50CF  </span><span style="color:#89DDFF;">=================</span><span style="color:#A6ACCD;">  \u4EE5\u4E0A\u4E3A\u6784\u5EFA\u547D\u4EE4\uFF0C\u4EE5\u4E0B\u4E3A\u8FD0\u884C\u547D\u4EE4</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> always # \u603B\u662F\u91CD\u542F</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flask_v1 # \u8FD0\u884C\u540E\u7684\u5BB9\u5668\u7684\u540D\u79F0</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">7008:9000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> # \u7AEF\u53E3\u6620\u5C04\uFF0C \u8FD9\u91CC\u662F\u5C06 docker \u5BB9\u5668\u5185\u7684 </span><span style="color:#F78C6C;">9000</span><span style="color:#A6ACCD;"> \u7AEF\u53E3\u6620\u5C04\u5230\u4E91\u670D\u52A1\u5668\u7684 </span><span style="color:#F78C6C;">7008</span><span style="color:#A6ACCD;"> \u7AEF\u53E3  7008\u4E3A\u5916\u7F51\u7AEF\u53E3\u53F7</span></span>
<span class="line"></span></code></pre></div><h2 id="step-4-\u8FD0\u884C\u9879\u76EE" tabindex="-1">Step. 4: \u8FD0\u884C\u9879\u76EE <a class="header-anchor" href="#step-4-\u8FD0\u884C\u9879\u76EE" aria-hidden="true">#</a></h2><ul><li>\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u6267\u884C</li></ul><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker-compose up -d --build</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ul><li>\u68C0\u67E5\u9879\u76EE\u662F\u5426\u542F\u52A8</li></ul><div class="language-python"><button class="copy"></button><span class="lang">python</span><pre><code><span class="line"><span style="color:#676E95;">#\u68C0\u67E5\u662F\u5426\u542F\u52A8</span></span>
<span class="line"><span style="color:#A6ACCD;">docker</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">compose ps </span></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u7AEF\u53E3\u662F\u5426\u542F\u52A8\u5360\u7528</span></span>
<span class="line"><span style="color:#A6ACCD;">netstat </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">nltp</span></span>
<span class="line"><span style="color:#676E95;"># \u67E5\u770B\u65E5\u5FD7\u662F\u5426\u62A5\u9519</span></span>
<span class="line"><span style="color:#A6ACCD;">docker logs flask_v1</span></span>
<span class="line"></span></code></pre></div><h2 id="step-5-\u914D\u7F6Enginx" tabindex="-1">Step. 5: \u914D\u7F6Enginx <a class="header-anchor" href="#step-5-\u914D\u7F6Enginx" aria-hidden="true">#</a></h2><ul><li>\u53EF\u4EE5\u5F00\u542Fgzip\u52A0\u901F</li></ul><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#A6ACCD;">server </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">listen</span><span style="color:#F07178;">  </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> # </span><span style="color:#A6ACCD;">\u76D1\u542C80\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;">       </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">www</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">wwwroot</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">b2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mr90</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">server_name</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">b2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mr90</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> # </span><span style="color:#A6ACCD;">\u914D\u7F6E\u57DF\u540D</span></span>
<span class="line"><span style="color:#F07178;">    # </span><span style="color:#FFCB6B;">\u5904\u7406\u9759\u6001\u8D44\u6E90</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">location</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">~</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">^</span><span style="color:#F07178;">\\</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">static</span><span style="color:#F07178;">\\</span><span style="color:#89DDFF;">/.*</span><span style="color:#A6ACCD;">$</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">www</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">wwwroot</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">b2</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">mr90</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">static</span><span style="color:#89DDFF;">/;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">fastcgi_param</span><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">HTTPS</span><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">fastcgi_param</span><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">HTTP_SCHEME</span><span style="color:#F07178;">   </span><span style="color:#A6ACCD;">https</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">gzip_static</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">gzip_proxied</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">expired</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">no</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">cache</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">no</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">store</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">private</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">auth</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">gzip</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">gzip_min_length</span><span style="color:#F07178;"> 1</span><span style="color:#A6ACCD;">k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">gzip_types</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">plain</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">application</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">javascript</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">application</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">javascript</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">css</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">application</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">xml</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">javascript</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">gzip_vary</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">gzip_disable</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">MSIE [1-6]</span><span style="color:#A6ACCD;">\\.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    # </span><span style="color:#82AAFF;">\u52A8\u6001\u8BF7\u6C42\u8F6C\u53D1\u52307008\u7AEF\u53E3</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">gunicorn</span><span style="color:#F07178;">):</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">location</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">proxy_pass</span><span style="color:#F07178;">       </span><span style="color:#FFCB6B;">http</span><span style="color:#89DDFF;">:</span><span style="color:#676E95;">//127.0.0.1:7008;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">X</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Real</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">IP</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Host</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">proxy_set_header</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">X</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">Forwarded</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">For</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">$proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,19),e=[o];function t(c,r,y,D,C,F){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
