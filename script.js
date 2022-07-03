//Bài 1: Xuất 3 số nguyên theo thứ tự tăng dần
/**
 * Input: num1, num2, num3
 * Process: 1. Lấy input
 *          2. Lập biểu thức điều kiện cho các trường hợp:
 *              - num1 với num2, num1 với mum3, num2 với num3
 *              - Tạo 1 biến tạm để so sánh và hoán đổi 2 số thông qua biến tạm cho các trường hợp
 *          4. Log ra màn hình 3 số nguyên theo thứ tự tăng dần
 * Output: In ra 3 số theo thứ tự tăng dần
 */
console.log("-----Bài 1: Xuất 3 số nguyên theo thứ tự tăng dần-----");
var num1 = 1003;
var num2 = 22;
var num3 = 30;
var temp;

if (num1 > num2) {
    temp = num1;
    num1 = num2;
    num2 = temp;
}
if (num1 > num3) {
    temp = num1;
    num1 = num3;
    num3 = temp;
}
if (num2 > num3) {
    temp = num2;
    num2 = num3;
    num3 = temp;
}
console.log("Các số theo thứ tự tăng dần:", num1, num2, num3);

//Bài 2: Chương trình chào hỏi
/**
 * Input: Đặc điểm của Ba, Mẹ , Em gái, Anh trai
 * Process: 1. Lấy input.
 *          2. Tạo biến checkLogin. Lập biểu thức điều kiện kiểm tra giá trị của checkLogin.
 *          3. Hiển thị lời chào ra màn hình
 * Output. In ra màn hình lời chào người đăng nhập
 */
console.log("-----Bài 2: Chương trình chào hỏi-----");
var B = "Bố";
var M = "Mẹ";
var E = "Em gái";
var A = "Anh trai";
var checkLogin = E;
var message = "Xin chào ";
if (checkLogin === B) {
    message += B;
} else if (checkLogin === M) {
    message += M;
} else if (checkLogin === E) {
    message += E;
} else if (checkLogin === A) {
    message += A;
}
console.log(message);

//Bài 3: Đếm số chẵn và số lẻ
/**
 * Input: numb1, numb2, numb3
 * Process:
 *      1. Lấy input
 *      2. Tạo biến đếm count = 0, lập biểu thức điều kiện kiểm tra số chẵn, lẻ và cộng vào biến count
 *          - numb % 2 === 0 là số chẵn, ngược lại là số lẻ
 *          - số chẵn = count, số lẻ = 3 - count
 *      3. Log ra màn hình kết quả
 * Ouput. Tổng số số chẵn và số lẻ
 */
console.log("-----Bài 3: Đếm số chẵn và số lẻ-----");
var numb1 = 22;
var numb2 = 33;
var numb3 = 592;
var count = 0;
if (numb1 % 2 === 0) {
    count++;
}
if (numb2 % 2 === 0) {
    count++;
}
if (numb3 % 2 === 0) {
    count++;
}
console.log("Có %d số chẵn và %d số lẻ", count, 3 - count);

//Bài 4: Kiểm tra loại tam giác
/**
 * Input: 3 cạnh a, b, c của tam giác.
 * Process: 1. Lấy Input
 *          2. Lập biểu thức điều kiện kiểm tra các trường hợp:
 *              - Đều: Nếu 3 cạnh bằng nhau.
 *              - Cân: Nếu 2 cạnh bằng nhau.
 *              - Vuông: c^2 = a^2 + b^2.
 *              - Còn lại là Tam giác thường, khác và không phải tam giác
 *          3. Xuất ra màn hình kết quả
 * Output:Xuất ra kết quả tam giác gì
 */
console.log("-----Bài 4: Kiểm tra loại tam giác-----");
var a = 8;
var b = 6;
var c = 10;
var msg;

if ((a + b > c) && (a + c > b) && (b + c > a)) {
    if ((a === b) && (b === c)) {
        msg = "Đây là tam giác đều";
    } else if ((a === b) || (a === c) || (b === c)) {
        msg = "Đây là tam giác cân";
    } else if ((a * a === b * b + c * c)
                || (b * b === a * a + c * c)
                || (c * c === a * a + b * b)) {
        msg = "Đây là tam giác vuông";
    } else {
        msg = "Đây là tam giác thường hoặc khác!";
    }
} else {
    msg = "Đây không phải tam giác";
}
console.log(msg);
