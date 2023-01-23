window.onload = function () {


    let dateDiv1 = document.getElementById('dateDiv1')
    let contentDiv1 = document.getElementById('contentDiv1')
    let title1 = document.getElementById('title1')

    let picture1 = document.getElementById('picture1')
    let author1 = document.getElementById('author1')
    let content1 = document.getElementById('content1')
    let date1 = document.getElementById('date1')



    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=1')
        .then(res => {
            console.log(res);

            if (res.ok) {
                res.json().then(data => {

                    dateDiv1.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    contentDiv1.innerHTML = data.content[0]
                    console.log(data)

                    title1.innerHTML = data.title
                    //picture1.src = data.picture
                    author1.innerHTML = `${data.author.name} ${data.author.surname}`
                    date1.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    content1.innerHTML = data.content[0]
                })
            } else {
                console.log('ERREUR D\'API');
                res.json().then(data => console.log(data))
            }
        })



    let dateDiv2 = document.getElementById('dateDiv2')
    let contentDiv2 = document.getElementById('contentDiv2')
    let title2 = document.getElementById('title2')

    let picture2 = document.getElementById('picture2')
    let author2 = document.getElementById('author2')
    let content2 = document.getElementById('content2')
    let date2 = document.getElementById('date2')



    fetch('https://www.tbads.eu/greta/kercode/ajax/?article=2')
        .then(res => {
            console.log(res);

            if (res.ok) {
                res.json().then(data => {

                    dateDiv2.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    contentDiv2.innerHTML = data.content[0]
                    console.log(data)

                    title2.innerHTML = data.title
                    //picture2.src = data.picture
                    author2.innerHTML = `${data.author.name} ${data.author.surname}`
                    date2.innerHTML = `${data.date.day} ${data.date.month} ${data.date.year}`
                    content2.innerHTML = data.content[0]
                })
            } else {
                console.log('ERREUR D\'API');
                res.json().then(data => console.log(data))
            }
        })

};
