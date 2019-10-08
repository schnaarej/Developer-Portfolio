function Select(idName)
{   
    //First display no elements of class service card
    let services = document.getElementsByClassName('service-card');
    for(var i = 0; i < services.length; i++)
    {
        services.item(i).classList.remove('visible');
    }
    
    //Then display element with id
    let service = document.querySelector(`#${idName}`);
    if(service === null)
        return;
    else
    {
        service.classList.add('visible');
    }
}