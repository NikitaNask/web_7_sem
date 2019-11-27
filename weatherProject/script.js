document.getElementById("input-form").addEventListener("submit",MainFunction);
function MainFunction(event)
{
    event.preventDefault();
    $(function find ()
    {
            let wAPI = $.getJSON('https://api.openweathermap.org/data/2.5/weather?appid=9d5b59f6e7f7e77586dc0269e6d0438a', {q: cityName.value})
                .done(function (data)
                {
                    Weather(data);
                })
                .fail(function (error)
                {
                    Weather_Error(error);
                })
    });

}
function Weather(data)
{
    let template = $("#main_template").html();
    let text = Mustache.render(template, data);
    $("#window").html(text);
}

function Weather_Error(error)
{
    if (error.status !== 404 || error.status !== 400)
    {
        document.getElementById('out-put').innerText = 'Ошибка, попробуйте позже :)';
    }
    else
    {
        document.getElementById('out-put').innerText = 'Город не найден';
    }
}


