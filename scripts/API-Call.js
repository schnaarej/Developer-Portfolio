const resultElement = document.getElementById('Github');

async function GetRepos()
{
    const url = "https://api.github.com/users/schnaarej/repos";
    const response = await fetch(url);
    const message = await response.json();

    message.forEach(element => {
        const anchor = document.createElement("a");
        anchor.href = element.html_url;
        anchor.textContent = element.name;
        anchor.target = "_blank";
        resultElement.appendChild(anchor);
        resultElement.appendChild(document.createElement("br"));
    });
}

GetRepos();