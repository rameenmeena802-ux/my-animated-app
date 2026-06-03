import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

// ============ CRAZY LOADING SPINNER ============
function LoadingSpinner() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <div style={{
        width: '80px',
        height: '80px',
        border: '5px solid rgba(0,255,255,0.2)',
        borderTop: '5px solid #00ffff',
        borderRight: '5px solid #ff00ff',
        borderRadius: '50%',
        animation: 'crazySpin 0.8s linear infinite'
      }} />
      <p style={{ 
        color: '#00ffff', 
        marginTop: '30px',
        fontSize: '20px',
        animation: 'pulse 1s infinite'
      }}>
        🚀 LOADING SPACE MISSION... 🚀
      </p>
    </div>
  )
}

// ============ NAVBAR ============
function Navbar() {
  const [hovered, setHovered] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
      background: scrolled ? 'rgba(0,0,0,0.95)' : 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(10px)',
      padding: scrolled ? '12px' : '18px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '5%',
      paddingRight: '5%',
      borderBottom: '2px solid #00ffff',
      boxShadow: '0 0 30px rgba(0,255,255,0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      transition: 'all 0.3s'
    }}>
      {/* Logo */}
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold',
        background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        🚀 COSMIC CREW
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '20px' }}>
        {[
          { path: '/', name: 'HOME', glow: '#00ffff' },
          { path: '/users', name: 'CREW', glow: '#ff00ff' },
          { path: '/categories', name: 'ROLES', glow: '#ffff00' },
          { path: '/about', name: 'MISSION', glow: '#00ff00' }
        ].map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            onMouseEnter={() => setHovered(item.path)}
            onMouseLeave={() => setHovered(null)}
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              padding: '8px 20px',
              borderRadius: '25px',
              transition: 'all 0.3s',
              background: hovered === item.path ? `rgba(0,255,255,0.2)` : 'transparent',
              transform: hovered === item.path ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  )
}

// ============ PROFESSIONAL HOME PAGE WITH BACKGROUND IMAGE & ANIMATED SIDE ============
function Home() {
  const [showMessage, setShowMessage] = useState(false)
  const [typedText, setTypedText] = useState('')
  const fullText = "Welcome to the future of space exploration..."

  useEffect(() => {
    let i = 0
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(typing)
      }
    }, 50)
    return () => clearInterval(typing)
  }, [])

  const features = [
    { icon: "🌌", title: "Intergalactic Database", desc: "Access 1000+ astronaut profiles" },
    { icon: "🚀", title: "Real-time Missions", desc: "Track ongoing space missions" },
    { icon: "🛸", title: "AI Analytics", desc: "Smart crew recommendations" },
    { icon: "⭐", title: "24/7 Support", desc: "Mission control always ready" }
  ]

  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative'
    }}>
      {/* Dark Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6))'
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '60px 5%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '50px',
        alignItems: 'center',
        minHeight: 'calc(100vh - 80px)'
      }}>
        {/* LEFT SIDE - ANIMATED CONTENT */}
        <div style={{
          animation: 'slideInLeft 0.8s ease-out'
        }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
            padding: '8px 20px',
            borderRadius: '30px',
            marginBottom: '20px',
            animation: 'pulse 2s infinite'
          }}>
            <span style={{ color: 'white', fontWeight: 'bold' }}>🌟 SINCE 2024 🌟</span>
          </div>

          <h1 style={{
            fontSize: '56px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Explore The{' '}
            <span style={{
              background: 'linear-gradient(135deg, #00ffff, #ff00ff, #ffff00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Cosmic Universe
            </span>
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#00ffff',
            marginBottom: '15px',
            fontFamily: 'monospace',
            minHeight: '60px'
          }}>
            {typedText}
            <span style={{
              animation: 'blink 1s infinite',
              marginLeft: '2px'
            }}>|</span>
          </p>

          <p style={{
            fontSize: '16px',
            color: '#ccc',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            Join the most advanced space exploration program. Manage astronauts,
            track missions, and explore galaxies with our cutting-edge platform.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <Link to="/users">
              <button style={{
                background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
                color: 'white',
                padding: '14px 35px',
                fontSize: '16px',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                🚀 EXPLORE CREW
              </button>
            </Link>
            
            <button
              onClick={() => setShowMessage(!showMessage)}
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#00ffff',
                padding: '14px 35px',
                fontSize: '16px',
                border: '2px solid #00ffff',
                borderRadius: '50px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0,255,255,0.2)'
                e.target.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)'
                e.target.style.transform = 'scale(1)'
              }}>
                🎯 MISSION INFO
              </button>
          </div>

          {/* Surprise Message */}
          {showMessage && (
            <div style={{
              marginTop: '20px',
              padding: '15px',
              background: 'rgba(0,0,0,0.8)',
              borderRadius: '15px',
              border: '2px solid #ff00ff',
              animation: 'shake 0.5s'
            }}>
              <p style={{ color: '#ff00ff' }}>🎉 CURRENT MISSION: MARS COLONIZATION 2030 🎉</p>
              <p style={{ color: '#ffff00', fontSize: '14px' }}>Join us in making history!</p>
            </div>
          )}

          {/* Stats Row */}
          <div style={{
            display: 'flex',
            gap: '30px',
            marginTop: '40px',
            paddingTop: '30px',
            borderTop: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#00ffff' }}>500+</div>
              <div style={{ color: '#ccc', fontSize: '12px' }}>ASTRONAUTS</div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#ff00ff' }}>50+</div>
              <div style={{ color: '#ccc', fontSize: '12px' }}>MISSIONS</div>
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#ffff00' }}>12</div>
              <div style={{ color: '#ccc', fontSize: '12px' }}>GALAXIES</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - ANIMATED FEATURES GRID */}
        <div style={{
          animation: 'slideInRight 0.8s ease-out'
        }}>
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '30px',
            padding: '30px',
            border: '1px solid rgba(255,255,255,0.2)'
          }}>
            <h2 style={{
              color: 'white',
              fontSize: '28px',
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              ✨ Why Choose Cosmic Crew? ✨
            </h2>
            
            <div style={{
              display: 'grid',
              gap: '20px'
            }}>
              {features.map((feature, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '15px',
                    background: 'rgba(0,0,0,0.3)',
                    borderRadius: '15px',
                    transition: 'all 0.3s',
                    animation: `fadeInUp 0.5s ${i * 0.1}s both`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateX(10px)'
                    e.currentTarget.style.background = 'rgba(0,255,255,0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.background = 'rgba(0,0,0,0.3)'
                  }}>
                  <div style={{ fontSize: '40px' }}>{feature.icon}</div>
                  <div>
                    <div style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>{feature.title}</div>
                    <div style={{ color: '#aaa', fontSize: '14px' }}>{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Counter */}
            <div style={{
              marginTop: '25px',
              textAlign: 'center',
              padding: '15px',
              background: 'linear-gradient(135deg, rgba(0,255,255,0.2), rgba(255,0,255,0.2))',
              borderRadius: '15px',
              animation: 'float 3s ease-in-out infinite'
            }}>
              <p style={{ color: '#00ffff' }}>🌍 LIVE ASTRONAUT COUNT 🌍</p>
              <p style={{ fontSize: '32px', fontWeight: 'bold', color: 'white' }}>36 Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============ CATEGORIES PAGE ============
function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  
  const categories = {
    "👨‍🚀 Commanders": [
      { name: "Mission Control", desc: "Lead space missions", icon: "🎯", level: "Elite" },
      { name: "Strategic Planning", desc: "Planetary exploration", icon: "🌍", level: "Advanced" },
      { name: "Team Leadership", desc: "Crew management", icon: "👥", level: "Expert" }
    ],
    "🛸 Pilots": [
      { name: "Spacecraft Ops", desc: "Fly advanced ships", icon: "🚀", level: "Expert" },
      { name: "Navigation", desc: "Interstellar routes", icon: "🧭", level: "Advanced" },
      { name: "Emergency Landings", desc: "Crisis management", icon: "⚠️", level: "Elite" }
    ],
    "🔧 Engineers": [
      { name: "Systems Repair", desc: "Fix critical systems", icon: "🔧", level: "Expert" },
      { name: "Tech Innovation", desc: "Build new tech", icon: "💡", level: "Elite" },
      { name: "Maintenance", desc: "Daily operations", icon: "🛠️", level: "Advanced" }
    ],
    "📡 Scientists": [
      { name: "Research", desc: "Study alien life", icon: "🔬", level: "Elite" },
      { name: "Data Analysis", desc: "Process telemetry", icon: "📊", level: "Expert" },
      { name: "Experiments", desc: "Zero-g testing", icon: "🧪", level: "Advanced" }
    ]
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '48px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '10px'
        }}>
          👨‍🚀 Astronaut Roles 👩‍🚀
        </h1>
        
        <p style={{ textAlign: 'center', color: '#00ffff', marginBottom: '40px' }}>
          Choose your specialization in the cosmic fleet
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px'
        }}>
          {Object.keys(categories).map((category, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '20px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.3s',
                border: selectedCategory === category ? '2px solid #ff00ff' : '1px solid rgba(0,255,255,0.3)',
                animation: `slideInUp 0.5s ${i * 0.1}s both`
              }}
              onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}>
              <div style={{ fontSize: '60px', textAlign: 'center' }}>{category.split(' ')[0]}</div>
              <h3 style={{ color: 'white', textAlign: 'center', fontSize: '22px', margin: '15px 0' }}>
                {category}
              </h3>
              
              {selectedCategory === category && (
                <div style={{ marginTop: '20px', animation: 'slideInUp 0.3s' }}>
                  {categories[category].map((item, idx) => (
                    <div key={idx} style={{
                      background: 'rgba(0,0,0,0.5)',
                      padding: '12px',
                      margin: '10px 0',
                      borderRadius: '10px',
                      borderLeft: `3px solid ${idx === 0 ? '#00ffff' : idx === 1 ? '#ff00ff' : '#ffff00'}`
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontSize: '28px' }}>{item.icon}</span>
                        <div style={{ flex: 1 }}>
                          <div style={{ color: 'white', fontWeight: 'bold' }}>{item.name}</div>
                          <div style={{ color: '#ccc', fontSize: '12px' }}>{item.desc}</div>
                        </div>
                        <div style={{
                          background: item.level === 'Elite' ? '#ff00ff' : item.level === 'Expert' ? '#00ffff' : '#ffff00',
                          padding: '3px 10px',
                          borderRadius: '15px',
                          fontSize: '10px',
                          fontWeight: 'bold'
                        }}>
                          {item.level}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              <div style={{ textAlign: 'center', marginTop: '15px', color: '#00ffff', fontSize: '12px' }}>
                {selectedCategory === category ? '▲ Tap to close ▲' : '▼ Tap to expand ▼'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============ USERS PAGE ============
function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('name')

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  )

  const getSortedUsers = () => {
    let sorted = [...filteredUsers]
    if (sortBy === 'name') {
      sorted.sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === 'nameDesc') {
      sorted.sort((a, b) => b.name.localeCompare(a.name))
    }
    return sorted
  }

  if (loading) return <LoadingSpinner />

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{
          fontSize: '48px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '10px'
        }}>
          🌟 Galactic Astronaut Crew 🌟
        </h1>
        
        <p style={{ textAlign: 'center', color: '#00ffff', marginBottom: '30px' }}>
          Total Active: {filteredUsers.length} Members
        </p>
        
        {/* Search and Sort */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <input
            type="text"
            placeholder="🔍 Search astronaut by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: '15px 30px',
              width: '350px',
              borderRadius: '50px',
              border: '2px solid #00ffff',
              background: 'rgba(0,0,0,0.7)',
              color: 'white',
              fontSize: '16px',
              outline: 'none'
            }}
          />
          <div style={{ marginTop: '15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button onClick={() => setSortBy('name')} style={{
              padding: '8px 20px',
              background: sortBy === 'name' ? '#00ffff' : 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '20px',
              color: 'white',
              cursor: 'pointer'
            }}>📝 A-Z</button>
            <button onClick={() => setSortBy('nameDesc')} style={{
              padding: '8px 20px',
              background: sortBy === 'nameDesc' ? '#ff00ff' : 'rgba(255,255,255,0.2)',
              border: 'none',
              borderRadius: '20px',
              color: 'white',
              cursor: 'pointer'
            }}>📝 Z-A</button>
          </div>
        </div>

        {/* Users Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {getSortedUsers().map((user, index) => (
            <Link key={user.id} to={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '25px',
                textAlign: 'center',
                border: '1px solid rgba(0,255,255,0.3)',
                transition: 'all 0.3s',
                cursor: 'pointer',
                animation: `fadeInUp 0.5s ${index * 0.05}s both`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                e.currentTarget.style.borderColor = '#ff00ff'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(255,0,255,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.borderColor = 'rgba(0,255,255,0.3)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: `linear-gradient(135deg, ${index % 2 === 0 ? '#00ffff' : '#ff00ff'}, ${index % 3 === 0 ? '#ffff00' : '#00ff00'})`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  animation: 'rotate 10s linear infinite'
                }}>
                  <span style={{ fontSize: '45px', fontWeight: 'bold', color: 'white' }}>
                    {user.name.charAt(0)}
                  </span>
                </div>
                <h2 style={{ color: 'white', fontSize: '22px', marginBottom: '5px' }}>{user.name}</h2>
                <p style={{ color: '#00ffff', marginBottom: '10px' }}>🛸 {user.email}</p>
                <p style={{ color: '#ccc', fontSize: '14px' }}>📡 {user.company.name}</p>
                <div style={{
                  marginTop: '15px',
                  padding: '8px',
                  background: 'rgba(0,255,255,0.1)',
                  borderRadius: '10px',
                  color: '#00ffff',
                  fontSize: '12px'
                }}>
                  👆 View Mission Profile
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============ USER DETAILS PAGE ============
function UserDetails() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [showFullBio, setShowFullBio] = useState(false)
  const id = window.location.pathname.split('/')[2]

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setUser(response.data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [id])

  const downloadJSON = () => {
    const dataStr = JSON.stringify(user, null, 2)
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr)
    const linkElement = document.createElement('a')
    linkElement.setAttribute('href', dataUri)
    linkElement.setAttribute('download', `${user.name}_profile.json`)
    linkElement.click()
  }

  const copyProfileLink = () => {
    navigator.clipboard.writeText(window.location.href)
    alert('✅ Profile link copied!')
  }

  if (loading) return <LoadingSpinner />

  if (!user) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0c29, #302b63)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <p style={{ color: 'red', fontSize: '24px' }}>🚫 Astronaut Not Found 🚫</p>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      padding: '40px 20px'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Link to="/users" style={{
          color: '#00ffff',
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: '20px',
          fontSize: '16px'
        }}>
          ← 🔙 Back to Crew Roster
        </Link>

        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '30px',
          overflow: 'hidden',
          border: '2px solid rgba(0,255,255,0.5)',
          animation: 'slideInUp 0.6s'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
            padding: '40px',
            textAlign: 'center'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              background: 'rgba(255,255,255,0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              animation: 'float 3s ease-in-out infinite'
            }}>
              <span style={{ fontSize: '50px', fontWeight: 'bold', color: 'white' }}>
                {user.name.charAt(0)}
              </span>
            </div>
            <h1 style={{ fontSize: '32px', color: 'white', marginBottom: '5px' }}>{user.name}</h1>
            <p style={{ color: '#fff', opacity: 0.9 }}>✨ Astronaut ID: #{user.id} ✨</p>
          </div>

          {/* Details */}
          <div style={{ padding: '30px' }}>
            <div style={{
              display: 'grid',
              gap: '15px',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
            }}>
              <DetailCard icon="📧" label="Quantum Comms" value={user.email} color="#00ffff" />
              <DetailCard icon="📞" label="Emergency Beacon" value={user.phone} color="#ff00ff" />
              <DetailCard icon="🌐" label="Neural Link" value={user.website} color="#ffff00" />
              <DetailCard icon="🏢" label="Space Agency" value={user.company.name} color="#00ff00" />
              <DetailCard icon="📍" label="Home Base" value={`${user.address.city}, ${user.address.zipcode}`} color="#ff6b35" />
              <DetailCard icon="🎯" label="Motto" value={user.company.catchPhrase || "To Infinity!"} color="#ff00ff" />
            </div>
            
            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '30px'
            }}>
              <button onClick={downloadJSON} style={{
                background: '#00ff00',
                color: 'black',
                padding: '12px 25px',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
                💾 Download Profile
              </button>
              
              <button onClick={copyProfileLink} style={{
                background: '#00ffff',
                color: 'black',
                padding: '12px 25px',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
                🔗 Share Profile
              </button>
              
              <button onClick={() => window.print()} style={{
                background: '#ff6600',
                color: 'white',
                padding: '12px 25px',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
                🖨️ Print ID Card
              </button>
            </div>

            {/* Mission Briefing */}
            <div style={{
              marginTop: '30px',
              padding: '20px',
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <p style={{ color: '#00ffff', marginBottom: '10px' }}>🚀 MISSION BRIEFING 🚀</p>
              <p style={{ color: '#ccc', fontSize: '14px' }}>
                {showFullBio 
                  ? `${user.name} is a highly trained astronaut specializing in ${user.company.bs || 'space exploration'}. With years of experience in intergalactic missions, they have successfully completed over 50 spacewalks and led multiple groundbreaking expeditions.`
                  : `${user.name} is a certified astronaut ready for deep space missions...`}
              </p>
              <button 
                onClick={() => setShowFullBio(!showFullBio)}
                style={{
                  marginTop: '10px',
                  background: 'transparent',
                  border: 'none',
                  color: '#ff00ff',
                  cursor: 'pointer'
                }}
              >
                {showFullBio ? 'Show less' : 'Read full briefing →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DetailCard({ icon, label, value, color }) {
  return (
    <div style={{
      background: 'rgba(0,0,0,0.5)',
      padding: '15px',
      borderRadius: '15px',
      borderLeft: `4px solid ${color}`,
      transition: 'all 0.3s'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
      <div style={{ fontSize: '24px', marginBottom: '5px' }}>{icon}</div>
      <h3 style={{ color: color, fontSize: '11px', marginBottom: '5px', textTransform: 'uppercase' }}>{label}</h3>
      <p style={{ color: 'white', fontSize: '14px', wordBreak: 'break-all' }}>{value}</p>
    </div>
  )
}

// ============ ABOUT PAGE ============
function About() {
  const stats = [
    { value: '∞', label: 'Galaxies Explored', icon: '🌌', color: '#00ffff' },
    { value: '24/7', label: 'Mission Control', icon: '🛸', color: '#ff00ff' },
    { value: '100%', label: 'Success Rate', icon: '⭐', color: '#ffff00' },
    { value: '50+', label: 'Awards', icon: '🏆', color: '#00ff00' }
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      padding: '60px 20px'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px', animation: 'slideInDown 0.6s' }}>
          <h1 style={{
            fontSize: '56px',
            background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px'
          }}>
            🎯 Mission Control Center
          </h1>
          <p style={{ color: '#00ffff', fontSize: '18px' }}>Since 2024 | Exploring the Unknown</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '25px',
          marginBottom: '50px'
        }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,0.1)',
                padding: '25px',
                borderRadius: '20px',
                textAlign: 'center',
                border: `2px solid ${stat.color}`,
                animation: `floatCard ${3 + i}s ease-in-out infinite`
              }}>
              <div style={{ fontSize: '40px' }}>{stat.icon}</div>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: stat.color }}>{stat.value}</div>
              <div style={{ color: 'white', marginTop: '10px' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '20px',
          padding: '40px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#00ffff', marginBottom: '20px' }}>🚀 Our Mission 🚀</h2>
          <p style={{ color: '#ccc', fontSize: '18px', lineHeight: '1.6' }}>
            To connect the finest astronauts across the galaxy and push the boundaries 
            of space exploration. Innovation, excellence, and discovery drive us forward.
          </p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '20px',
          padding: '30px',
          marginTop: '30px',
          textAlign: 'center'
        }}>
          <h2 style={{ color: '#ffff00', marginBottom: '20px' }}>🛰️ Tech Stack 🛰️</h2>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['React', 'React Router', 'Axios', 'Space CSS'].map((tech, i) => (
              <span key={i} style={{
                background: `linear-gradient(135deg, ${['#00ffff', '#ff00ff', '#ffff00', '#00ff00'][i]}, transparent)`,
                color: 'white',
                padding: '8px 20px',
                borderRadius: '25px',
                fontWeight: 'bold'
              }}>
                🚀 {tech}
              </span>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '50px', color: '#666' }}>
          <p>👨‍🚀 Group No 2 | Cosmic Crew Project 👩‍🚀</p>
        </div>
      </div>
    </div>
  )
}

// ============ MAIN APP ============
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App