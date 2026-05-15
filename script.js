// 你的邏輯資料
const quizData = {
    "start": {
        q: "どのような雰囲気（ふんいき）が好きですか？",
        yes: { label: "賑やか", next: "trend" },
        no: { label: "穏やか", next: "humanTouch" }
    },
    "trend": {
        q: "流行やSNS映えをチェックしますか？",
        yes: { label: "チェックする", next: "colorDesign" },
        no: { label: "チェックしない", next: "focusOn" }
    },
    "humanTouch": {
        q: "人の温かみとデジタル、どちらが好き？",
        yes: { label: "人の温かみ", next: "focusOn" },
        no: { label: "デジタルで無機質", next: "gameWorld" }
    },
    "colorDesign": {
        q: "デザインする時の色の好みは？",
        yes: { label: "元気でカラフルな色", result: "文化祭チラシ" },
        no: { label: "落ち着いたシックな色", result: "メニュー表" }
    },
    "focusOn": {
        q: "一つの事にこだわりますか？",
        yes: { label: "こだわる", result: "写真コラージュ" },
        no: { label: "こだわらない", result: "結婚式関連" }
    },
    "gameWorld": {
        q: "ゲームの世界観は好き？",
        yes: { label: "好き", result: "ゲームチラシ" },
        no: { label: "嫌い", result: "英字新聞風" }
    }
};

let currentNode = "start";

// --- 關鍵函式：一定要對應到 HTML 裡的 onclick="initQuiz()" ---
function initQuiz() {
    console.log("開始按鈕被點擊了！"); // 這是測試用的，如果沒反應，按 F12 看看有沒有這行
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    renderQuestion();
}

function handleAnswer(isYes) {
    const choice = isYes ? "yes" : "no";
    const nextStep = quizData[currentNode][choice];

    if (nextStep.result) {
        showResult(nextStep.result);
    } else {
        currentNode = nextStep.next;
        renderQuestion();
    }
}

function renderQuestion() {
    const data = quizData[currentNode];
    if (!data) return;
    document.getElementById('question-content').innerText = data.q;
    document.getElementById('btn-yes').innerText = data.yes.label;
    document.getElementById('btn-no').innerText = data.no.label;
}

function showResult(title) {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('result-text').innerText = title;
}

