import GeneralInfomation from '@/components/GeneralInformation'
import Step from '@/components/Step'
import { Card, Flex, Space } from 'antd'
import { useEffect, useState } from 'react'
import ThankYou from '@/components/CheckInformation'
function User() {
  const [stepCurrent, setStepCurrent] = useState(0);
  const items=[
    {
      title: 'Nhập thông tin',
    },
    {
      title: 'Hoàn Thành',
    },
  ]
  useEffect(()=>{

  },[stepCurrent])

  function handleSubmitStep1():void{
    setStepCurrent(1)
  }

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex', justifyContent: 'center' }}>
      <Card title="Chỉnh sửa thông tin" size="small">
      <Step items={items} current={stepCurrent}/>
      <Flex align='center' justify='center'>
        <div style={{marginTop: "30px"}}>
        {stepCurrent == 0 ? <GeneralInfomation onSubmit={handleSubmitStep1} /> : <></>}
        {stepCurrent == 1 ? <ThankYou/> : <></>}
        </div>
      </Flex>
      </Card>
    </Space>
  )
}

export default User