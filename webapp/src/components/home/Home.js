import { Col, message, PageHeader, Row, Spin, Table } from 'antd'
import React, { Fragment, useState } from 'react'
import { AppCard } from '../appCard/AppCard'
import GetMerchantTransactions from '../../gql/merchantTransactions.gql'
import { useQuery } from '@apollo/client'
import { BarChart } from '../chart/BarChart'

export function Home () {
  const [txMerchants, setTxMerchants] = useState([])
  const { loading, error } = useQuery(GetMerchantTransactions, {
    onCompleted: (data) => setTxMerchants(data.tx_merchants.map((merchant, i) => ({ ...merchant, key: i }))),
    onError: () => message.error('No chart data for you')
  })

  if (error) {
    return 'Nothing for you'
  }

  const columns = [
    {
      title: 'Merchant Name',
      dataIndex: ['merchant', 'name'],
      key: 'name'
    },
    {
      title: 'Amount ($ USD)',
      dataIndex: 'transactions_sum',
      key: 'sum'
    }
  ]

  return (
    <Fragment>
      <Row>
        <Col span={24}>
          <AppCard>
            <Spin spinning={loading}>
              <PageHeader title='How much and what kind of fast food cardholders are eating.' />
            </Spin>
          </AppCard>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <AppCard>
            <Table
              columns={columns}
              dataSource={txMerchants}
              pagination={false}
              scroll={{ y: 530 }}
              size='middle' />
          </AppCard>
        </Col>
        <Col span={14}>
          <AppCard>
            <Spin spinning={loading}>
              <BarChart txMerchants={txMerchants} />
            </Spin>
          </AppCard>
        </Col>
      </Row>
    </Fragment>
  )
}
