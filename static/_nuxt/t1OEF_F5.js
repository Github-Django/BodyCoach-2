const n=`<template>
  <BaseProse rounded="md" class="prose-md">
    <h1>افزونه تایپوگرافی</h1>

    <p class="lead">
      تا کنون، تلاش برای استایل‌دهی به یک مقاله، سند، یا پست وبلاگ با Tailwind کاری خسته‌کننده بوده که نیاز به دقت در تایپوگرافی و CSS سفارشی پیچیده داشته است.
    </p>

    <p>
      By default, Tailwind removes all of the default browser styling from paragraphs, headings,
      lists and more. This ends up being really useful for building application UIs because you
      spend less time undoing user-agent styles, but when you
      <em>really are</em>
      just trying to style some content that came from a rich-text editor in a CMS or a markdown
      file, it can be surprising and unintuitive.
    </p>

    <p>در واقع، ما شکایات زیادی در مورد آن دریافت می‌کنیم و مردم به طور منظم سوالاتی مانند این می‌پرسند:</p>

    <blockquote>
      <p>
        Why is Tailwind removing the default styles on my
        <code>h1</code>
        elements? How do I disable this? What do you mean I lose all the other base styles too?
      </p>
    </blockquote>

    <p>
      We hear you, but we're not convinced that simply disabling our base styles is what you really
      want. You don't want to have to remove annoying margins every time you use a
      <code>p</code>
      element in a piece of your dashboard UI. And I doubt you really want your blog posts to use
      the user-agent styles either — you want them to look
      <em>awesome</em>
      , not awful.
    </p>

    <p>
      The
      <code>@tailwindcss/typography</code>
      plugin is our attempt to give you what you
      <em>actually</em>
      want, without any of the downsides of doing something stupid like disabling our base styles.
    </p>

    <p>
      It adds a new
      <code>prose</code>
      class that you can slap on any block of vanilla HTML content and turn it into a beautiful,
      well-formatted document:
    </p>

    <pre><code class="language-html">&lt;article class="prose"&gt;
  &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;
  &lt;p&gt;
  For years parents have espoused the health benefits of eating garlic bread with cheese to their
  children, with the food earning such an iconic status in our culture that kids will often dress
  up as warm, cheesy loaf for Halloween.
  &lt;/p&gt;
  &lt;p&gt;
  But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
  springing up around the country.
  &lt;/p&gt;
  &lt;!-- ... --&gt;
  &lt;/article&gt;
  </code></pre>

    <p>
      برای اطلاعات بیشتر در مورد نحوه استفاده از افزونه و ویژگی‌هایی که شامل می‌شود,
      <a href="https://github.com/tailwindcss/typography/blob/master/README.md">
        مستندات را مطالعه بفرمائید
      </a>
      .
    </p>

    <hr>

    <h2>از اینجا به بعد چه انتظاری باید داشت</h2>

    <p>
      What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin
      itself. It includes every sensible typographic element I could think of, like
      <strong>bold text</strong>
      , unordered lists, ordered lists, code blocks, block quotes,
      <em>and even italics</em>
      .
    </p>

    <p>پوشش دادن همه این موارد مهم است به چند دلیل:</p>

    <ol>
      <li>ما می‌خواهیم همه چیز به‌صورت پیش‌فرض خوب به نظر برسد.</li>

      <li>فقط دلیل اول مهم است، این کل هدف این افزونه است.</li>

      <li>
        در اینجا یک دلیل ساختگی سوم وجود دارد، اگرچه لیستی با سه آیتم واقعی‌تر از لیستی با دو آیتم به نظر می‌رسد.
      </li>
    </ol>

    <p>حالا می‌خواهیم سبک دیگری از عنوان را امتحان کنیم.</p>

    <h3>تایپوگرافی باید ساده باشد</h3>

    <p>
      بنابراین این یک عنوان برای شماست - با کمی شانس، اگر کارمان را درست انجام داده باشیم، باید معقول به نظر برسد.
    </p>

    <p>چیزی که فرد خردمندی درباره تایپوگرافی به من گفت:</p>

    <blockquote>
      <p>
        تایپوگرافی بسیار مهم است اگر نمی‌خواهید چیزهای شما به شکل زباله به نظر برسد. خوب انجام دهید و بد نخواهد بود.
      </p>
    </blockquote>

    <p>احتمالاً مهم است که تصاویر به طور پیش‌فرض اینجا خوب به نظر برسند:</p>

    <figure>
      <img
        src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
        alt=""
      >

      <figcaption>
        برخلاف باور عمومی، لورم ایپسوم صرفاً متنی تصادفی نیست. ریشه در یک اثر ادبیات کلاسیک لاتین از سال ۴۵ پیش از میلاد دارد، که بیش از ۲۰۰۰ سال قدمت دارد.
      </figcaption>
    </figure>

    <p>
      حالا می‌خواهم یک مثال از لیست نامرتب نشان دهم تا مطمئن شویم که آن هم خوب به نظر می‌رسد:
    </p>

    <ul>
      <li>پس این اولین مورد در این لیست است.</li>

      <li>در این مثال ما آیتم‌ها را کوتاه نگه می‌داریم.</li>

      <li>بعداً از آیتم‌های لیست طولانی‌تر و پیچیده‌تر استفاده خواهیم کرد.</li>
    </ul>

    <p>و این پایان این بخش است.</p>

    <h2>اگر ما عنوان‌ها را پشت سر هم قرار دهیم، چه؟</h2>

    <h3>ما باید مطمئن شویم که آن هم خوب به نظر می‌رسد.</h3>

    <p>
      گاهی اوقات عنوان‌ها به طور مستقیم زیر یکدیگر قرار می‌گیرند. در این موارد، اغلب باید حاشیه بالای عنوان دوم را حذف کنید زیرا معمولاً بهتر است عنوان‌ها به یکدیگر نزدیک‌تر باشند تا یک پاراگراف که پس از آن عنوان بیاید.
    </p>

    <h3>وقتی یک عنوان بعد از پاراگراف می‌آید...</h3>

    <p>
      وقتی عنوانی پس از یک پاراگراف می‌آید، به فضای بیشتری نیاز داریم، همانطور که قبلاً ذکر کردم. حالا ببینیم یک لیست پیچیده‌تر چگونه به نظر می‌رسد.
    </p>

    <ul>
      <li>
        <p>
          <strong>اغلب این کار را انجام می‌دهم که آیتم‌های لیست دارای عنوان باشند.</strong>
        </p>

        <p>
          به دلیلی فکر می‌کنم این ظاهر خوبی دارد، که متأسفانه تنظیم درست استایل‌ها خیلی آزاردهنده است.
        </p>

        <p>
          اغلب در این موارد لیست دو یا سه پاراگراف دارم، بنابراین بخش سخت تنظیم فاصله بین پاراگراف‌ها، عنوان آیتم لیست و آیتم‌های جداگانه است تا همه منطقی به نظر برسد. صادقانه بگویم، می‌توانید به‌طور قوی استدلال کنید که نباید به این شیوه نوشت.
        </p>
      </li>

      <li>
        <p>
          <strong>از آنجا که این یک لیست است، حداقل به دو آیتم نیاز دارم.</strong>
        </p>

        <p>
          قبلاً در آیتم لیست قبلی توضیح دادم که چه می‌کنم، اما یک لیست لیست نخواهد بود اگر فقط یک آیتم داشته باشد و ما واقعاً می‌خواهیم این واقعی به نظر برسد. به همین دلیل است که این آیتم لیست دوم را اضافه کردم تا واقعاً چیزی داشته باشم که هنگام نوشتن استایل‌ها به آن نگاه کنم.
        </p>
      </li>

      <li>
        <p>
          <strong>اضافه کردن یک آیتم سوم نیز ایده بدی نیست.</strong>
        </p>

        <p>
          فکر می‌کنم احتمالاً استفاده از دو مورد کافی بود اما سه مورد قطعاً بدتر نیست، و از آنجا که به نظر نمی‌رسد مشکلی در نوشتن چیزهای تصادفی داشته باشم، ممکن است آن را هم اضافه کنم.
        </p>
      </li>
    </ul>

    <p>
      بعد از این نوع لیست معمولاً یک بیانیه یا پاراگراف پایانی دارم، چون پرش مستقیم به یک عنوان کمی عجیب به نظر می‌رسد.
    </p>

    <h2>کد باید به طور پیش‌فرض خوب به نظر برسد.</h2>

    <p>
      I think most people are going to use
      <a href="https://highlightjs.org/">highlight.js</a>
      or
      <a href="https://prismjs.com/">Prism</a>
      or something if they want to style their code blocks but it wouldn't hurt to make them look
      <em>okay</em>
      out of the box, even with no syntax highlighting.
    </p>

    <p>
      Here's what a default
      <code>tailwind.config.ts</code>
      file looks like at the time of writing:
    </p>

    <pre><code class="language-js">module.exports = {
  purge: [],
  theme: {
  extend: {},
  },
  variants: {},
  plugins: [],
  }
  </code></pre>

    <p>امیدوارم به اندازه کافی برای شما خوب به نظر برسد.</p>

    <h3>لیست‌های تو در تو چطور؟</h3>

    <p>
      لیست‌های تو در تو اصولاً همیشه بد به نظر می‌رسند و به همین دلیل است که ویرایشگرهایی مثل Medium حتی اجازه نمی‌دهند که این کار را انجام دهید، اما من حدس می‌زنم که چون برخی از شما احمق‌ها قرار است این کار را انجام دهید، ما باید حداقل بار درست کردن آن را به دوش بکشیم.
    </p>

    <ol>
      <li>
        <strong>لیست‌های تو در تو به ندرت ایده خوبی هستند.</strong>

        <ul>
          <li>
            ممکن است فکر کنید خیلی «سازماندهی شده» یا چیزی شبیه به آن هستید، اما در واقع فقط یک شکل ناخوشایند در صفحه ایجاد می‌کنید که خواندن آن سخت است.
          </li>

          <li>پیمایش تو در تو در رابط کاربری هم ایده بدی است، همه چیز را تا حد امکان مسطح نگه دارید.</li>

          <li>تودرتو کردن حجم زیادی از پوشه‌ها در کد منبع شما هم مفید نیست.</li>
        </ul>
      </li>

      <li>
        <strong>از آنجا که به موارد بیشتری نیاز داریم، در اینجا یکی دیگر است.</strong>

        <ul>
          <li>مطمئن نیستم که برای استایل‌دهی به عمق بیش از دو سطح زحمت بکشیم.</li>

          <li>دو مورد از قبل زیاد است، سه مورد تضمینی است که ایده بدی خواهد بود.</li>

          <li>اگر چهار سطح تو در تو بسازید، باید در زندان باشید.</li>
        </ul>
      </li>

      <li>
        <strong>دو آیتم واقعاً لیست نیست، اما سه مورد خوب است.</strong>

        <ul>
          <li>لطفاً دوباره لیست‌ها را تو در تو نکنید اگر می‌خواهید مردم واقعاً محتوای شما را بخوانند.</li>

          <li>هیچ‌کس نمی‌خواهد به این نگاه کند.</li>

          <li>من ناراحتم که حتی باید برای استایل دادن به این زحمت بکشیم.</li>
        </ul>
      </li>
    </ol>

    <p>
      The most annoying thing about lists in Markdown is that
      <code>&lt;li&gt;</code>
      elements aren't given a child
      <code>&lt;p&gt;</code>
      tag unless there are multiple paragraphs in the list item. That means I have to worry about
      styling that annoying situation too.
    </p>

    <ul>
      <li>
        <p>
          <strong>برای مثال، در اینجا یک لیست تو در تو دیگر است.</strong>
        </p>

        <p>اما این بار با یک پاراگراف دوم.</p>

        <ul>
          <li>
            These list items won't have
            <code>&lt;p&gt;</code>
            tags
          </li>

          <li>زیرا هرکدام فقط یک خط هستند</li>
        </ul>
      </li>

      <li>
        <p>
          <strong>اما در این آیتم لیست سطح بالا، آن‌ها خواهند بود.</strong>
        </p>

        <p>این مخصوصاً به دلیل فاصله‌گذاری در این پاراگراف آزاردهنده است.</p>

        <ul>
          <li>
            <p>
              As you can see here, because I've added a second line, this list item now has a
              <code>&lt;p&gt;</code>
              tag.
            </p>

            <p>راستی، این همان خط دومی است که در موردش صحبت می‌کردم.</p>
          </li>

          <li>
            <p>در نهایت، در اینجا یک آیتم لیست دیگر است تا بیشتر شبیه به یک لیست شود.</p>
          </li>
        </ul>
      </li>

      <li>
        <p>یک آیتم لیست پایانی، اما بدون لیست تو در تو، چون چرا که نه؟</p>
      </li>
    </ul>

    <p>و در نهایت جمله‌ای برای پایان دادن به این بخش.</p>

    <h2>عناصر دیگری وجود دارد که باید استایل دهیم</h2>

    <p>
      I almost forgot to mention links, like
      <a href="https://tailwindcss.com">this link to the Tailwind CSS website</a>
      . We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier.
    </p>

    <p>ما حتی استایل‌های جدول را هم اضافه کرده‌ایم، بررسی کنید:</p>

    <table>
      <thead>
        <tr>
          <th>کشتی‌گیر</th>

          <th>Origin</th>

          <th>تمام‌کننده</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>برت «ضارب» هارت</td>

          <td>کلگری، آلبرتا</td>

          <td>Sharpshooter</td>
        </tr>

        <tr>
          <td>استیو آستین سنگ‌سرد</td>

          <td>آستین، تگزاس</td>

          <td>سنگ سرد شگفت‌انگیز</td>
        </tr>

        <tr>
          <td>رندی سوج</td>

          <td>ساراسوتا، فلوریدا</td>

          <td>ضربه آرنج</td>
        </tr>

        <tr>
          <td>ویدر</td>

          <td>بولدر، کلرادو</td>

          <td>بمب ویدر</td>
        </tr>

        <tr>
          <td>تیغ رامون</td>

          <td>چولوآتا، فلوریدا</td>

          <td>لبه تیغ</td>
        </tr>
      </tbody>
    </table>

    <p>
      We also need to make sure inline code looks good, like if I wanted to talk about
      <code>&lt;span&gt;</code>
      elements or tell you the good news about
      <code>@tailwindcss/typography</code>
      .
    </p>

    <h3>
      Sometimes I even use
      <code>code</code>
      in headings
    </h3>

    <p>
      Even though it's probably a bad idea, and historically I've had a hard time making it look
      good. This
      <em>"wrap the code blocks in backticks"</em>
      trick works pretty well though really.
    </p>

    <p>
      Another thing I've done in the past is put a
      <code>code</code>
      tag inside of a link, like if I wanted to tell you about the
      <a href="https://github.com/tailwindcss/docs">
        <code>tailwindcss/docs</code>
      </a>
      repository. I don't love that there is an underline below the backticks but it is absolutely
      not worth the madness it would require to avoid it.
    </p>

    <h4>
      We haven't used an
      <code>h4</code>
      yet
    </h4>

    <p>
      But now we have. Please don't use
      <code>h5</code>
      or
      <code>h6</code>
      in your content, Medium only supports two heading levels for a reason, you animals. I honestly
      considered using a
      <code>before</code>
      pseudo-element to scream at you if you use an
      <code>h5</code>
      or
      <code>h6</code>
      .
    </p>

    <p>
      We don't style them at all out of the box because
      <code>h4</code>
      elements are already so small that they are the same size as the body copy. What are we
      supposed to do with an
      <code>h5</code>
      , make it
      <em>smaller</em>
      than the body copy? No thanks.
    </p>

    <h3>ما هنوز باید درباره عنوان‌های پشت سر هم فکر کنیم.</h3>

    <h4>
      Let's make sure we don't screw that up with
      <code>h4</code>
      elements, either.
    </h4>

    <p>
      هوف، با کمی شانس ما سرفصل‌های بالای این متن را استایل دادیم و به نظر می‌رسند که خوب باشند.
    </p>

    <p>
      بیایید یک پاراگراف پایانی اینجا اضافه کنیم تا همه چیز با یک بلوک متنی مناسب به پایان برسد. نمی‌توانم توضیح بدهم چرا می‌خواهم همه چیز به این صورت تمام شود، اما فرض می‌کنم به این دلیل است که فکر می‌کنم اگر یک عنوان خیلی نزدیک به انتهای سند باشد، چیزها عجیب یا نامتعادل به نظر خواهند رسید.
    </p>

    <p>
      آنچه در اینجا نوشته‌ام احتمالاً به اندازه کافی طولانی است، اما افزودن این جمله پایانی ضرری ندارد.
    </p>
  </BaseProse>
</template>
`;export{n as default};
