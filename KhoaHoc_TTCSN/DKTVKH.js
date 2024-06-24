function dk() {
  const form = document.querySelector('form');
  const fullnameInput = document.querySelector('input[name="fullname"]');
  const phoneInput = document.querySelector('input[name="phone"]');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const fullname = fullnameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!fullname || !phone) {
      alert('Vui lòng nhập đầy đủ họ tên và số điện thoại.');
      return; 
    }

    alert('Đăng ký thành công!');

    form.reset();
  });
}
