/*Services function */

document.addEventListener('DOMContentLoaded', () => {
    const cardData = [
        {
            img: './Image/wwd1.png',
            heading: 'ESAY THEME SETUP',
            paragraph: 'Nucs mattis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et error molestias sint magni perspiciatis dolore vero illum quis quia.'
        },
        {
            img: './Image/wwd2.png',
            heading: 'PIXEL PERFECT DESIGN',
            paragraph: 'Nucs mattis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et error molestias sint magni perspiciatis dolore vero illum quis quia.'
        },
        {
            img: './Image/wwd3.png',
            heading: 'RESPONSIVE DISPLAY',
            paragraph: 'Nucs mattis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et error molestias sint magni perspiciatis dolore vero illum quis quia.'
        },
        {
            img: './Image/wwd4.png',
            heading: '24/7 SUPPORT',
            paragraph: 'Nucs mattis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et error molestias sint magni perspiciatis dolore vero illum quis quia.'
        },
        {
            img: './Image/wwd1.png',
            heading: 'ESAY THEME SETUP',
            paragraph: 'Nucs mattis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et error molestias sint magni perspiciatis dolore vero illum quis quia.'
        }
        ,
        {
            img: './Image/wwd2.png',
            heading: 'PIXEL PERFECT DESIGN',
            paragraph: 'Nucs mattis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et error molestias sint magni perspiciatis dolore vero illum quis quia.'
        },
        {
            img: './Image/wwd3.png',
            heading: 'RESPONSIVE DISPLAY',
            paragraph: 'Nucs mattis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et error molestias sint magni perspiciatis dolore vero illum quis quia.'
        },
        {
            img: './Image/wwd4.png',
            heading: '24/7 SUPPORT',
            paragraph: 'Nucs mattis Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et error molestias sint magni perspiciatis dolore vero illum quis quia.'
        }
    ];

    const cardContainer = document.querySelector('.services_box');

    const servicesMethods = () => {
        cardData.forEach((postData) => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('services_box1');
            cardElement.innerHTML = `
            <img src="${postData.img}" alt="IMG" class="services_img">
            <h4 class="services_head">${postData.heading}</h4>
            <p class="services_desc">${postData.paragraph}</p>
        `;
            cardContainer.appendChild(cardElement);
        });
    };

    if (cardContainer) {
        servicesMethods();
    } else {
        console.error('Error: Unable to find the services.');
    }
});


/*Team function */


document.addEventListener('DOMContentLoaded', () => {
    const teamData = [
        {
            img: './Image/team1.png',
            name: 'GLORIA BROMLEY',
            post: 'CEO and Founder'
        },
        {
            img: './Image/team2.png',
            name: 'PAUL TORRES',
            post: 'Head of Deparment'
        },
        {
            img: './Image/team3.png',
            name: 'JUDITH GILLETTE',
            post: 'Graphic Desinger'
        },
        {
            img: './Image/team4.png',
            name: 'DELORES REED',
            post: 'Client Service Director'
        }
    ];

    const teamContainer = document.querySelector('.team_list');

    const teamMethods = () => {
        teamData.forEach((teamData) => {
            const teamElement = document.createElement('div');
            teamElement.classList.add('team_member');
            teamElement.innerHTML = `
            <img src="${teamData.img}" alt="IMG" class="team_img">
            <h4 class="team_name">${teamData.name}</h4>
            <p class="team_post">${teamData.post}</p>

              <a href="https://twitter.com/rashtrapatibhvn" target="_blank" class="team_anchor">
              <i class="fa-brands fa-twitter"></i></a>
        `;
            teamContainer.appendChild(teamElement);
        });
    };

    if (teamContainer) {
        teamMethods();
    } else {
        console.error('Error: Unable to find the team container.');
    }
});


/*Work list*/


document.addEventListener('DOMContentLoaded', () => {
    const workData = [
        {
            img: './Image/work1.png'
        },
        {
            img: './Image/work2.png'
        },
        {
            img: './Image/work3.png'
        },
        {
            img: './Image/work4.png'
        },
        {
            img: './Image/work5.png'
        },
        {
            img: './Image/work6.png'
        }
    ];

    const workContainer = document.querySelector('.work_list');

    const workMethods = () => {
        workData.forEach((workData) => {
            const postElement = document.createElement('div');
            postElement.classList.add('work_item');
            postElement.innerHTML = `<img src="${workData.img}" alt="IMG" class="work_img">
              <a href="https://www.google.com/" target="_blank" class="work_anchor">+</a>`;
            workContainer.appendChild(postElement);
        });
    };
    if (workContainer) {
        workMethods();
    } else {
        console.error('Error: Unable to find the work container.');
    }
});

