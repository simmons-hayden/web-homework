import { Avatar, Col, Row, Typography } from 'antd'
import { shape, string } from 'prop-types'
import React, { useState } from 'react'
import { AppCard } from '../appCard/AppCard'

const siliconSlopes = ['🏡', '🏪', '🏗', '🏫', '🛣']
const colors = {
  '🏡': '#ff9185',
  '🏪': '#ffbc85',
  '🏗': '#fff985',
  '🏫': '#acff85',
  '🛣': '#85fff9'
}

export function Company ({ company }) {
  const [logo] = useState(siliconSlopes[Math.floor(Math.random() * siliconSlopes.length)])

  return (
    <AppCard>
      <Row>
        <Col span={16}>
          <Typography.Title level={3}>{company.name}</Typography.Title>
        </Col>
        <Col span={8}>
          <Avatar icon={logo} size={64} style={{ backgroundColor: colors[logo] }} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          Total Credit: {company.credit_line}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          Available Credit: {company.available_credit}
        </Col>
      </Row>
    </AppCard>
  )
}

Company.propTypes = {
  company: shape({
    name: string
  })
}
