import React from 'react'
import styled from 'styled-components'


function Header() {
  return (
      <Navbar>
          <Logo src="/images/Gediye.png"></Logo>
          <NavMenu>
           <a href="#">
                  <i className="fa fa-home"></i>
                  <span>Home</span>
              </a>
              <a href="#">
                  <i className="fa fa-search"></i>
                  <span>search</span>
              </a>
              <a href="#">
                  <i className="fa fa-plus"></i>
                  <span>watchlist</span>
              </a>
              <a href="#">
                  <i className="fa fa-star"></i>
                  <span>originals</span>
              </a>
              <a href="#">
                  <i className="fa fa-tv"></i>
                  <span>Movies</span>
              </a>
              <a href="#">
                  <i className="fa fa-film"></i>
                  <span>series</span>
              </a>
          </NavMenu>
          <Avatar>
              <img src="/images/square.png" alt="" />
          </Avatar>
      </Navbar>

  )
}

export default Header

const Navbar = styled.div`
    height: 70px;
    width: 100%;
    background: #090b13;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.img`
    width: 120px;
    height: 70px;
    object-fit: cover;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    gap: 20px;
    justify-content: center;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        font-size: 12px;
        color: rgba(255,255,255,73%);
        i{
            margin-right: 2px;
        }
        span{
            text-transform: uppercase;
            font-weight: bold;
        }
        margin-right: 10px;
    }
`
const Avatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`