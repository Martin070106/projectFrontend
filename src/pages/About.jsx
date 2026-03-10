import PageLayout from '../components/PageLayout'

const team = [
  {
    id: 'martin',
    name: 'Kamecz Martin',
    role: 'Fejlesztő',
    image: '/images/Martin.jpg',
    bio: 'Frontend fejlesztő, a felhasználói élmény és a teljesítmény rajongója.'
  },
  {
    id: 'akos',
    name: 'Hegymegi-Kiss Ákos',
    role: 'Designer',
    image: '/images/Akos.jpg',
    bio: 'UI/UX tervező, aki a reszponzív és érthető felületeket szereti létrehozni.'
  },
  {
    id: 'dominika',
    name: 'Péterffy Dominika',
    role: 'Projektvezető',
    image: '/images/Dominika.jpg',
    bio: 'Projektvezető, fókuszban a határidők és a csapat összhangja.'
  }
]

export default function About() {
  return (
    <PageLayout>
      <section className="about-page">
        <header className="about-hero">
          <h1>Rólunk</h1>
          <p className="about-intro">Kisállat Webshop célja, hogy megbízható, minőségi termékeket juttasson el a házi kedvencek gazdáihoz. Csapatunk missziója egyszerű: könnyű, barátságos vásárlási élmény és gondoskodás minden ügyfél számára.</p>
        </header>

        <div className="team-section">
          <h2>Csapatunk</h2>
          <div className="team-grid">
            {team.map(member => (
              <article className="team-card" key={member.id}>
                <div className="team-photo-wrap">
                  <img src={member.image} alt={member.name} className="team-photo" />
                </div>
                <div className="team-info">
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
