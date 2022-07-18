const teamArray =   [
                        {
                            'nome': 'Wayne Barnett',
                            'ruolo':  'Founder & CEO',
                            'foto': 'wayne-barnett-founder-ceo.jpg'
                        },

                        {
                            'nome': 'Angela Caroll',
                            'ruolo':  'Chief Editor',
                            'foto': 'angela-caroll-chief-editor.jpg'
                        },

                        {
                            'nome': 'Walter Gordon',
                            'ruolo':  'Office Manager',
                            'foto': 'walter-gordon-office-manager.jpg'
                        },

                        {
                            'nome': 'Angela Lopez',
                            'ruolo':  'Social Media Manager',
                            'foto': 'angela-lopez-social-media-manager.jpg'
                        },

                        {
                            'nome': 'Scott Estrada',
                            'ruolo':  'Developer',
                            'foto': 'scott-estrada-developer.jpg'
                        },

                        {
                            'nome': 'Barbara Ramos',
                            'ruolo':  'Graphic Designer',
                            'foto': 'barbara-ramos-graphic-designer.jpg'
                        }

                    ];

const containerDom = document.getElementById('container');

for(let i = 0; i < teamArray.length; i++){
    containerDom.innerHTML += `<div class="card">
                                    <img src="img/${teamArray[i].foto}" alt="foto">
                                    <div class="text"><h2>${teamArray[i].nome}</h2> <span>${teamArray[i].ruolo}</span></div>
                                </div>`
}  