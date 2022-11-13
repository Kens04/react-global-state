import { useState } from "react";
import { createContext } from "react";

export const AdminFlagContext = createContext({});

export const AdminFlagProvider = props => {
  const { children } = props;

  // 管理者グラグ
  const [isAdmin, setIsAdmin] = useState(false);

    // 動作確認のために適当なオブジェクトを定義
    // const sampleObj = { sampleValue: "テスト" };

  // Context オブジェクトとして isAdmin と setIsAdmin を設定(オブジェクトの省略記法)
  // AdminFlagContext の中に Provider があるのでそれで children を囲む
  // value の中にグローバルに扱う実際の値を設定
  return (
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  );
};