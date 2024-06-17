import { Input } from "antd";
import { UserOutlined } from '@ant-design/icons';

function App(){

  return(
    <div className="loginForm">
       <Input placeholder="default size" prefix={<UserOutlined />} />
    </div>
  )
}

export default App