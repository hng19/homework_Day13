# Phương thức mảng JavaScript

## Chuyển đổi mảng thành chuỗi

Phương thức JavaScript `toString()`chuyển đổi một mảng thành một chuỗi các giá trị mảng (được phân tách bằng dấu phẩy).

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
//=>Banana,Orange,Apple,Mango
```

Phương `join()`thức này cũng nối tất cả các phần tử của mảng thành một chuỗi.

Nó hoạt động giống như vậy `toString()`, nhưng ngoài ra, bạn có thể chỉ định dấu phân tách:

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
//=>Banana * Orange * Apple * Mango
```

## Popping & push
Khi bạn làm việc với mảng, bạn có thể dễ dàng loại bỏ các phần tử và thêm các phần tử mới.

Đây là những gì `popping` và `push` là:

Đưa các mục ra khỏi một mảng hoặc đẩy các mục vào một mảng.

## JavaScript Array pop ()
Phương `pop()`thức xóa phần tử cuối cùng khỏi một mảng:

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
//=>Banana,Orange,Apple,Mango
//=>Banana,Orange,Apple
```
Phương `pop()`thức trả về giá trị được "bật ra":

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
// Mango
```

## JavaScript Array push ()
Phương `push()`thức thêm một phần tử mới vào một mảng (ở cuối):

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
// Banana,Orange,Apple,Mango
```
Phương `push()`thức trả về độ dài mảng mới:

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
//=>5
```
## JavaScript Array `shift ()`
Phương thức `shift()` loại bỏ phần tử mảng đầu tiên và "chuyển" tất cả các phần tử khác xuống một chỉ số thấp hơn.

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
//=>Banana,Orange,Apple,Mango
```
Phương `shift()`thức trả về giá trị đã được "chuyển ra ngoài":

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
//Banana
```
## JavaScript Array `unshift ()`
Phương thức `unshift()` thêm một phần tử mới vào một mảng (ở đầu) và "giải quyết" các phần tử cũ hơn:

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
//Banana,Orange,Apple,Mango
```
Phương `unshift()`thức trả về độ dài mảng mới.

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
//5
```

## Hợp nhất (Nối) Mảng
Phương `concat()`thức tạo một mảng mới bằng cách hợp nhất (nối) các mảng hiện có:

Ví dụ (Hợp nhất hai mảng)
```js
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
//Cecilie,Lone,Emil,Tobias,Linus
```
Phương `concat()`thức này không thay đổi các mảng hiện có. Nó luôn trả về một mảng mới.

Phương `concat()`thức có thể nhận bất kỳ số lượng đối số mảng nào:

Ví dụ (Hợp nhất ba mảng)
```js
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
//Cecilie,Lone,Emil,Tobias,Linus,Robin,Morgan
```
Phương `concat()`thức cũng có thể lấy chuỗi làm đối số:

Ví dụ (Hợp nhất một mảng với các giá trị)
```js
const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 
//Emil,Tobias,Linus,Peter
```
## JavaScript Array `splice ()`
Phương `splice()`thức này có thể được sử dụng để thêm các mục mới vào một mảng:

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
//Banana,Orange,Lemon,Kiwi,Apple,Mango
```
Tham số đầu tiên `(2)` xác định vị trí mà các phần tử mới sẽ được thêm vào `(nối vào)`.

Tham số thứ hai `(0)` xác định số lượng phần tử cần được loại bỏ .

Phần còn lại của các tham số `("Lemon", "Kiwi")` xác định các phần tử mới sẽ được thêm vào .

## Phương `splice()`thức trả về một mảng với các mục đã xóa:

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
//Banana,Orange,Lemon,Kiwi
```
## Sử dụng `splice ()` để loại bỏ các phần tử
Với cài đặt tham số thông minh, bạn có thể sử dụng `splice()`để loại bỏ các phần tử mà không để lại "lỗ hổng" trong mảng:

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
//Orange,Apple,Mango
```
Tham số đầu tiên `(0)` xác định vị trí mà các phần tử mới sẽ được thêm vào (nối vào).

Tham số thứ hai `(1)` xác định có bao nhiêu phần tử nên được loại bỏ .

Phần còn lại của các tham số bị bỏ qua. Không có yếu tố mới sẽ được thêm vào.

## JavaScript `slice ()`
Phương `slice()`thức này sẽ tách một phần của mảng thành một mảng mới.

Ví dụ này cắt ra một phần của mảng bắt đầu từ phần tử mảng 1 ("Orange"):

Ví dụ
```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
//Orange,Lemon,Apple,Mango
```
>Ghi chú 
* Phương `slice()`thức tạo một mảng mới.

* Phương `slice()`thức không xóa bất kỳ phần tử nào khỏi mảng nguồn.

Ví dụ này cắt ra một phần của mảng bắt đầu từ phần tử mảng 3 ("Apple"):

Ví dụ
```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);
//Lemon,Apple,Mango
```
Phương `slice()`thức có thể nhận hai đối số như `slice(1, 3)`.

Sau đó, phương thức chọn các phần tử từ đối số bắt đầu và lên đến (nhưng không bao gồm) đối số kết thúc.

Ví dụ
```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
//Orange,Lemon
```
Nếu đối số end bị bỏ qua, giống như trong các ví dụ đầu tiên, `slice()` phương thức này sẽ loại bỏ phần còn lại của mảng.
## Array Sort()
Phương pháp `sort()` sắp xếp một mảng theo thứ tự bảng chữ cái:

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
//Apple,Banana,Mango,Orange
```
## Đảo ngược một mảng
Phương thức `reverse()` đảo ngược các phần tử trong một mảng.

Bạn có thể sử dụng nó để sắp xếp một mảng theo thứ tự giảm dần:

Ví dụ
```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();
//Orange,Mango,Banana,Apple
```