const homeURL = '/home.html';

changePage(homeURL);

function changePage(url)
{
    setTimeout(() => {
        document.location.href = url;
    }, 3000);
}