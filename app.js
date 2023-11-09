function calculateRating() {
    const point = (document.getElementById("score"));
    const a = parseFloat(point.value)

    if (isNaN(a) || a < 0 || a > 10) {
        document.getElementById("result").textContent = "Vui lòng nhập điểm hợp lệ (từ 0 đến 10).";
        point.value= ""
        point.focus()
    } else {
        let rating = "";

        if (a >= 0 && a < 4) {
            rating = "Yếu";
        } else if (a >= 4 && a < 7) {
            rating = "Trung bình";
        } else if (a >= 7 && a < 8) {
            rating = "Khá";
        } else if (a >= 8 && a < 9) {
            rating = "Giỏi";
        } else {
            rating = "Xuất sắc";
        }
        document.getElementById("result").textContent = `Xếp loại: ${rating}`;
        point.value= ""
        point.focus()
    }
}