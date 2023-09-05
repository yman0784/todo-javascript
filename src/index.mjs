import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);    
}

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // divを作成
  const div = document.createElement("div");
  div.className = "list-row";

  // liを作成
  const li = document.createElement("li");
  li.innerText = text;
  
  // botton(完了）タグを作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", ()=>{
    // 押されたボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    // TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグを作成
    const li = document.createElement("li");
    li.innerText = text;
  
    // buttonタグを作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", ()=>{
      // 押された戻すボタンの親タグを完了リストから削除
      deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = deleteTarget.firstElementChild.innerText;
      createIncompleteList(text);
    })

    // divタグの子要素に各要素を追加
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  })

  // button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", ()=>{
    // 押された削除ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  })  

  // divタグの子要素に各要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  
  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
