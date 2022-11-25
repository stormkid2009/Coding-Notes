# Important Emmet for productivity

* ***Simply write the HTML element name for example "div" (without quotation) and hit enter :***
  ```html
  // div will produce
  <div></div>
  ```

* ***Use ( . ) for class name or ( # ) for id name directly after the tag name :***
  
  ```html
  // div.container will produce
  <div className="container"></div>
  // ul#items-list will produce
  <ul id="items-list"></ul>

  //Notice in the case of div only

  // .container will produce
  <div className="container"></div>

  // #items-container will produce
  <div id="items-container"></div>
  ```



* ***For Nesting elements or children use ( > ) after parent element :***
  ```html
  // ul>li    will produce:
  <ul>
    <li></li>
  </ul>

  // ul.items-list>li.item    will produce:
  <ul className="items-list">
    <li className="item"></li>
  </ul>

  // for paragraph tag with some boilerplate text:
  // p>lorem  will produce:
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugiat doloribus expedita impedit autem harum eum repellat debitis.
                Aliquid, nostrum nobis vero eos aut officia vel ipsam architecto unde rem asperiores.</p>

    ```
* ***For multiplying elements use ( * ) :***
  ```html
    // div.items-list>div.item*3  will produce:
        <div className="items-list">
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
        </div>

    

  ```
* ***For Siblings use ( + ):***
  ```html
    // .products>.computer+.mobile+.laptop (note this is for div element only) will produce:
        <div className="products">
            <div className="computer"></div>
            <div className="mobile"></div>
            <div className="laptop"></div>
        </div>
  ```

* ***For Numbering a name use ($):***
  ```html
    // ul.list>li.item$*5 will produce:
        <ul className="list">
            <li className="item1"></li>
            <li className="item2"></li>
            <li className="item3"></li>
        </ul>

  ```

* ***For Grouping use () around the emmet:***
  ```html
  // div.container>(header>ul>li*3)+(div.content>(p.post$)*5)+footer>ul>li*4  will produce:
    <div className="container">
            <header>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </header>
            <div className="content">
                <p className="post1"></p>
                <p className="post2"></p>
                <p className="post3"></p>
                <p className="post4"></p>
                <p className="post5"></p>
            </div>
            <footer>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </footer>
        </div>
  ```

* ***For adding text to element like paragraph or span :***
  ```html
  // we use curley braces {text here} after the element
  // p{this is text with emmet} will produce:
    <p>this is text with emmet</p>

  // 

  ```
  

