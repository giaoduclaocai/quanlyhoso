/**
 * TỆP KẾT NỐI HỆ THỐNG (ketnoi.js)
 * Vị trí lưu trữ: GitHub (Cùng cấp với tệp index.html)
 * Chức năng: Cấu hình tập trung thông tin định danh và địa chỉ máy chủ (API).
 * Nguyên tắc: Khi cần thay đổi Logo, Tên hệ thống hoặc thay đổi Link Web App mới, 
 * quản trị viên chỉ cần chỉnh sửa tại tệp này.
 */

const KETNOI = {
    // 1. Thông tin định danh cơ quan/đơn vị
    TEN_DINH_DANH: "Hợp Thành OS",
    TIEU_DE_TRANG: "Cổng thông tin Quản trị - Trường TH&THCS Hợp Thành",
    
    // 2. Tài nguyên hình ảnh đại diện (Logo)
    LINK_LOGO: "https://i.ibb.co/6R8Y9DNq/logo-l-a-ch-n6.png",
    
    // 3. Đường dẫn máy chủ xử lý dữ liệu (Google Apps Script API)
    // Lưu ý: Dán URL Web App (doPost) vào trong cặp dấu ngoặc kép bên dưới
    WEB_APP_URL: "https://script.google.com/macros/s/AKfycbxJEriNwHp3twwlVk_yqViktUo96XOj71ciMdNsNY8TSuH_76t7gPt48DGnWU34gWVdeQ/exec"
};
