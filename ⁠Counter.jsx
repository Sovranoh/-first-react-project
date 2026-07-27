import { useState } from 'react';

function Counter() {
  // نعرف متغير اسمه count يبصيفرة صفر، ودالة اسمها setCount حتى تحدث قيمته
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', fontFamily: 'sans-serif', marginTop: '40px' }}>
      <h2>مرحباً بك في رياكت</h2>
      <p>القيمة الحالية للعداد: {count}</p>
      
      {/* من المستخدم يدوس على الزر، نشغل دالة تزيد العداد بواحد */}
      <button onClick={() => setCount(count + 1)}>
        اضغط للزيادة
      </button>
    </div>
  );
}

export default Counter;
