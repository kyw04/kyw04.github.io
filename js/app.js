function CopyEmail()
{
  const email = document.getElementById("email").innerText;
  navigator.clipboard.writeText(email).then(() =>
  {
    alert("이메일이 복사되었습니다!");
  }).catch(() =>
  {
    alert("복사 실패");
  });
}
