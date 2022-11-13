// import { useState } from "react";
import { useContext } from "react";

import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
import { Card } from "./components/Card";

export const App = () => {
  // Context 内の isAdmin と更新関数を取得
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  // 管理者フラグ
  // const [isAdmin, setIsAdmin] = useState(false);

  // [切り替え]押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {/* 管理者フラグが true の時とそれ以外で文字を出し分け */}
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin}></Card>
    </div>
  );
};