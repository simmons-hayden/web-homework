import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'

export function Nav () {
  return (
    <nav css={navStyle}>
      <ul >
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/companies'>Companies</Link>
        </li>
        <li>
          <a href='https://thumbs.gfycat.com/DarlingGargantuanFoxterrier-mobile.mp4' rel='noreferrer'>
            Surprise
          </a>
        </li>
        <li>
          <Link to='/transactions'>Transactions</Link>
        </li>
      </ul>
    </nav>
  )
}

const navStyle = css`
  grid-row: 1;
  font-size: 16px;

  & > ul {
      display: flex;
      flex-direction: row;
      list-style-type: none;
  }

  & > ul > li {
    background-color: #707070;
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
  }

  & > ul > li > a {
    color: #ffffff;
  }
  
  & > ul > li:not(:first-of-type) {
    margin-left: 16px;
  }
`
