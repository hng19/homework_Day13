
// Bài tập:

// Bài 1: Tìm số lớn nhất trong mảng
function findMax(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(findMax([1, 2, 3, 4, 7, 11]))

// Bài 2: Tìm số nhỏ nhất trong mảng
function findMin(arr) {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}
console.log(findMin([1, 2, 3, 4, 7, 11]))


// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
function chiaMangCho2(arr){
    
}


// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần

function repeatString_01(str){
    return str.repeat(10)
}
console.log(repeatString_01("a"))
// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’
function repeatString(str) {
    string= str.repeat(10).split(``).join("-")
    return string.toString()
}
console.log(repeatString("a"))