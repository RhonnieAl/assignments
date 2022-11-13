/*
Class Assignment: This Gallery component contains some very similar markup for two profiles. 
Extract a Profile component out of it to reduce the duplication. You’ll need to choose what props to pass to it.
*/

function getImageUrl(people, size = 's') {
    return (
      'https://i.imgur.com/' +
      people.imageId +
      size +
      '.jpg'
    );
  }


function Profile({people, size, profession, awards, discovered}){
    return (
        <section className="profile">
            <h2>{people.name}</h2>
                <img
                    className="avatar"
                    src={getImageUrl(people)}
                    alt={people.name}
                    width={size}
                    height={size}
                />
                <ul>
                <li>
                    <b>Profession: </b> 
                        {profession}
                </li>
                <li>
                    <b>Awards: {awards.length} </b> 
                        {awards}
                </li>
                <li>
                    <b>Discovered: </b>
                        {discovered}
                </li>
                </ul>
            </section>        
    )
}

function Gallery(people, size, profession, awards, discovered) {
  return (
    <div>
        <Profile 
            discovered= 'polonium (element)'
            awards= {['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
            profession= 'physicist and chemist'
            size={70}
            people={{
                name: 'Maria Skłodowska-Curie',
                imageId: 'szV5sdG'
            }}
        />
        <Profile 
            discovered= 'a method for measuring carbon dioxide in seawater'
            awards= {['Miyake Prize for geochemistry', 'Tanaka Prize']}
            profession= 'geochemist'
            size={120}
            people={{
                name: 'Katsuko Saruhashi',
                imageId: 'YfeOqp2'
            }}
        />
    </div>
  );
}

