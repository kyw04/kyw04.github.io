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


document.addEventListener('DOMContentLoaded', () =>
{
    const parents = document.querySelectorAll('.skill');

    parents.forEach(parent =>
    {
        parent.addEventListener('click', function (event)
        {
            const explanation = parent.querySelector('.ability');
            const img = parent.querySelector('.pin');

            if (explanation && img)
            {
                if (parent.querySelector('.fixed'))
                {
                    explanation.classList.remove('fixed');
                    img.classList.remove('fixed');
                }
                else
                {
                    explanation.classList.add('fixed');
                    img.classList.add('fixed');
                }
            }
        });
    });
});