export const shortenText = (text: string, maxlength: number) => {
    // chỉ hiện khoảng 20 từ đầu tiên
    return text.split(' ').slice(0, maxlength).join(' ');
  }