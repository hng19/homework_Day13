# **String methods**
## **`indexOf`**
Chúng ta sử dụng phương thức `indexOf` trong JavaScript để tìm vị trí ký tự xuất hiện đầu tiên từ đầu chuỗi JavaScript với cú pháp sau đây:
```js
str.indexOf (sub [, index_start] )
```
Trong đó:

* `sub` là chuỗi ký tự cần tìm trong chuỗi    `str `, và có phân biệt chữ hoa chữ thường trong `sub`
* `index_start` là vị trí index bắt đầu tìm kiếm chuỗi sub trong chuỗi str. Và đối số này có thể được lược bỏ.

Kết quả trả về sẽ là `index` của vị trí ký tự `sub` xuất hiện đầu tiên tính từ đầu chuỗi `str`. Và nếu như sub không tồn tại trong `str` thì phương thức `indexOf` trong JavaScript sẽ trả về kết quả bằng -1.

Ví dụ :

```js
console.log("dictionary".indexOf("io"));
//> 4
```
ở ví dụ này, chuỗi `io` xuất hiện đầu tiên tính từ đầu chuỗi `dictionary` tại vị trí có index là 4, do đó phương thức `indexOf` trong JavaScript sẽ trả về kết quả là 4.
```
dictionary
----------
0123456789
```

## **`LastIndexOf`**

Chúng ta sử dụng phương thức `lastIndexOf` trong JavaScript để tìm vị trí ký tự xuất hiện đầu tiên từ cuối chuỗi JavaScript với cú pháp sau đây:

```js
str.lastIndexOf (sub [, index_start] )
```
Trong đó:

* `sub` là chuỗi ký tự cần tìm trong chuỗi str, và có phân biệt chữ hoa chữ thường trong sub
`index_start` là vị trí index bắt đầu tìm kiếm chuỗi `sub` trong chuỗi `str`. Và đối số này có thể được lược bỏ.

Kết quả trả về sẽ là index của vị trí ký tự `sub` xuất hiện đầu tiên tính từ cuối chuỗi `str`. Và nếu như sub không tồn tại trong `str` thì phương thức lastIndexOf trong JavaScript sẽ trả về kết quả bằng `-1`.

Ví dụ :
```js
console.log("Good School".lastIndexOf("oo"));
//> 8'
```
ở ví dụ, chuỗi `oo` xuất hiện hai lần trong chuỗi `Good School`, tuy nhiên phương thức `lastIndexOf` trong JavaScript sẽ chỉ trả về index tại vị trí chuỗi `oo` xuất hiện *đầu tiên tính từ cuối chuỗi* mà thôi.
```
Good School
-----------
012345678910
```

## **`Includes`**

Phương `includes()`thức trả về `true` nếu một chuỗi chứa một chuỗi được chỉ định.

Nếu không, nó sẽ trở lại `false`.

Phương `includes()`pháp này có phân biệt chữ hoa chữ thường.

Cú pháp
```js
string.includes(searchvalue, start)
```

Ví dụ :
```js
let text = "Hello world, welcome to the universe.";
let result = text.includes("world", 12);
//=>false
```

# JavaScript String Slice ()
`slice()`trích xuất một phần của chuỗi và trả về phần được trích xuất trong một chuỗi mới.

Phương thức nhận 2 tham số: vị trí bắt đầu và vị trí kết thúc (không bao gồm kết thúc).

Ví dụ này cắt ra một phần của chuỗi từ vị trí 7 đến vị trí 12 (13-1):

```js
Ví dụ
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
//=>Banana
```
>Ghi chú
* JavaScript đếm các vị trí từ 0.
* Vị trí đầu tiên là 0.
* Vị trí thứ hai là 1.

Nếu một tham số là số âm, vị trí được tính từ cuối chuỗi.

Ví dụ này cắt ra một phần của chuỗi từ vị trí -12 đến vị trí -6:

Ví dụ
```js
let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);
//=>Banana
```
Nếu bạn bỏ qua tham số thứ hai, phương thức sẽ loại bỏ phần còn lại của chuỗi:

Ví dụ
```js
let part = str.slice(7);
//=>Banana, Kiwi
```
hoặc, đếm từ cuối:

Ví dụ
```js
let part = str.slice(-12);
//=>Banana, Kiwi
```
## Chuỗi con JavaScript ()
`substring()`tương tự như `slice()`.

Sự khác biệt là `substring()`**không** thể chấp nhận các **chỉ số âm**.

Ví dụ
```js
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
//=>Banana
```
Nếu bạn bỏ qua tham số thứ hai, `substring()`sẽ loại bỏ phần còn lại của chuỗi.

## Chuỗi JavaScript `substr ()`
`substr()`tương tự như `slice()`.

Sự khác biệt là tham số thứ hai chỉ định độ dài của phần được trích xuất.

Ví dụ
```js
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
//=>Banana
```
Nếu bạn bỏ qua tham số thứ hai, `substr()`sẽ loại bỏ phần còn lại của chuỗi.

Ví dụ
```js
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
//=>Banana,Kiwi
```
Nếu tham số đầu tiên là số âm, vị trí được tính từ cuối chuỗi.

Ví dụ
```js
let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);
//=>Kiwi
```
## Thay thế nội dung chuỗi
Phương `replace()`thức thay thế một giá trị được chỉ định bằng một giá trị khác trong một chuỗi:

Ví dụ
```js
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
//=> Please visit W3Schools!
```
>Ghi chú
* Phương `replace()`thức không thay đổi chuỗi mà nó được gọi.
* Phương `replace()`thức trả về một chuỗi mới.
* Phương `replace()`thức chỉ thay thế kết quả phù hợp đầu tiên

Nếu bạn muốn thay thế tất cả các kết quả phù hợp, hãy sử dụng biểu thức chính quy với bộ cờ `/ g`. 

Theo mặc định, `replace()`phương thức này chỉ thay thế kết quả phù hợp đầu tiên :

Ví dụ
```js
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
//=>Please visit W3Schools and W3Schools!
```
Theo mặc định, `replace()`phương thức này có phân biệt chữ hoa chữ thường. Viết MICROSOFT (với chữ hoa) sẽ không hoạt động:

Ví dụ
```js
let text = "Please visit Microsoft!";
let newText = text.replace("MICROSOFT", "W3Schools");
//=>Please visit Microsoft!
```
## Chuyển đổi sang chữ hoa và chữ thường

Một chuỗi được chuyển đổi thành chữ hoa với `toUpperCase()`:

Một chuỗi được chuyển đổi thành chữ thường với `toLowerCase()`:

Chuỗi JavaScript `toUpperCase ()`

Ví dụ
```js
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
//=>HELLO WORLD
```
Chuỗi JavaScript `toLowerCase ()`

Ví dụ
```js
let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower
//=>hello world
```
## JavaScript String `concat ()`
`concat()`nối hai hoặc nhiều chuỗi:

Ví dụ
```js
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
//=> Hello World
```
Phương `concat()`thức này có thể được sử dụng thay cho toán tử cộng. Hai dòng này thực hiện tương tự:

Ví dụ
```js
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
//=>Hello World
```
>Ghi chú:
*  Tất cả các phương thức chuỗi đều trả về một chuỗi mới. Họ không sửa đổi chuỗi gốc.
* Chính thức nói:
Chuỗi là bất biến: Chuỗi không thể thay đổi, chỉ được thay thế.

## JavaScript String trim ()
Phương `trim()`thức loại bỏ khoảng trắng từ cả hai bên của một chuỗi:

Ví dụ
```js
let text1 = "      Hello World!      ";
let text2 = text1.trim();
//=>Length text1=22
//=>Length2 text2=12
```
## JavaScript String Padding
ECMAScript 2017 đã thêm hai phương thức Chuỗi: `padStart` và `padEnd` để hỗ trợ đệm ở đầu và cuối chuỗi.

## JavaScript String `padStart ()`
Ví dụ
```js
let text = "5";
let padded = text.padStart(4,0);
//=>0005
```
## JavaScript String padEnd ()
Ví dụ
```js
let text = "5";
let padded = text.padEnd(4,0);
//=>5000
```

## Chuỗi JavaScript `charAt ()`
Phương `charAt()`thức trả về ký tự tại một chỉ mục (vị trí) được chỉ định trong một chuỗi:

Ví dụ
```js
let text = "HELLO WORLD";
let char = text.charAt(0);
//=>H
```
## Chuỗi JavaScript `charCodeAt ()`
Phương `charCodeAt()`thức trả về mã unicode của ký tự tại một chỉ mục được chỉ định trong một chuỗi:

Phương thức này trả về mã UTF-16 (một số nguyên từ 0 đến 65535).

Ví dụ
```js
let text = "HELLO WORLD";
let char = text.charCodeAt(0);
//=>72
```
## JavaScript String `split ()`
Một chuỗi có thể được chuyển đổi thành một mảng bằng split()phương thức:

Ví dụ
```js
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
```
Nếu dấu phân tách bị bỏ qua, mảng được trả về sẽ chứa toàn bộ chuỗi trong chỉ mục [0].

Nếu dấu phân tách là `""`, mảng được trả về sẽ là một mảng các ký tự đơn:

Ví dụ
```js
text.split("")
//=>H
//=>e
//=>l
//=>l
//=>o
```
Tham chiếu chuỗi hoàn chỉnh
Để tham khảo chuỗi đầy đủ, hãy truy cập:

Tham chiếu chuỗi JavaScript hoàn chỉnh .

Tham chiếu chứa các mô tả và ví dụ về tất cả các thuộc tính và phương thức chuỗi.