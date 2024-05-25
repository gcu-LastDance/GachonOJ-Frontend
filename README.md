<div align="center">
<a href="http://cecloud.gachon.ac.kr:65001/">
<img width="100%" alt="GachonOJ 이동하기" src="https://github.com/gcu-LastDance/GachonOJ-Frontend/assets/109217208/e3338058-4817-4ce6-88d1-5bfa5233f9fd">
</a>

[![](https://img.shields.io/badge/-gachonoj-important?style=flat&logo=airplayvideo&logoColor=white&labelColor=black&color=%233145FF)](http://cecloud.gachon.ac.kr:65001/)
[![](https://img.shields.io/badge/back_release-v1.0.0-critical?style=flat&logo=github&logoColor=balck&labelColor=black&color=white)
](https://github.com/gcu-LastDance/GachonOJ-Frontend/releases)

## 👻 Member

<table>
<tr>
<td align="center">BE<strong>(PM)</strong></td>
<td align="center">BE</td>
<td align="center">FE</td>
<td align="center">FE</td>

</tr>
  <tr>
    <td align="center" width="120px">
      <a href="https://github.com/naminhyeok" target="_blank">
        <img src="" alt="나민혁 프로필" />
      </a>
    </td>
    <td align="center" width="120px">
      <a href="https://github.com/chogh824" target="_blank">
        <img src="" alt="조기헌 프로필" />
      </a>
    </td>
    <td align="center" width="120px">
      <a href="https://github.com/11chyeonjin" target="_blank">
        <img src="" alt="정현진 프로필" />
      </a>
    </td>
    <td align="center" width="120px">
      <a href="https://github.com/ehs208" target="_blank">
        <img src="" alt="은현수 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/naminhyeok" target="_blank">
        나민혁 🐥
      </a>
    </td>
     <td align="center">
      <a href="https://github.com/chogh824" target="_blank">
       조기헌
      </a>
    </td> 
     <td align="center">
      <a href="https://github.com/11chyeonjin" target="_blank">
       정현진
      </a>
       <td align="center">
      <a href="https://github.com/ehs208" target="_blank">
        은현수
      </a>
  </tr>
</table>

# <img src="https://github.com/gcu-LastDance/GachonOJ-Backend/assets/112960401/38316365-a949-4c98-8863-b9f70e82d572" align=left width=90>

> GachonOJ 가천대학교 학생들을 위한 저지 서비스 입니다.
>
> 개발 기간: 2024.03 - 2024.05

# GachonOJ

### ✨GachonOJ 가천대학교 학생들을 위한 저지 서비스 ✨

</div>

## 🔍 About GachonOJ

GachonOJ는 가천대학교 학생들을 위해 개발되어진 온라인 저지 플랫폼입니다.

## 🖥️ Service

| 웹IDE & 채점 서비스 | AI 피드백 구현 |
| :-----------------: | :------------: |
|    <img src=''>     |  <img src=''>  |

## 📦 주요 기능

### USER SIDE

⚡️ 웹 IDE

⚡️ 코드 실행 및 채점하기

⚡️ AI 피드백을 통한 코드 개선

⚡️ 손코딩을 대체할 시험 제출

⚡️ 사용자 프로필 관리

### ADMIN SIDE

⚡️ 사용자 관리

⚡️ 문제/시험/대회 관리

⚡️ 공지사항/문의사항 관리

## 🛠️ 주요 의존성 패키지 버전

- **@codemirror/lang-java**: 6.0.1
- **@shinyongjun/react-fullpage**: 1.10.0
- **@tanstack/react-query**: 5.29.2
- **@tanstack/react-table**: 8.15.3
- **@uiw/codemirror-theme-github**: 4.21.25
- **@uiw/codemirror-theme-vscode**: 4.21.25
- **@uiw/react-codemirror**: 4.21.25
- **axios**: 1.6.8
- **framer-motion**: 11.1.9
- **next**: 14.1.4
- **next-themes**: 0.3.0
- **npm**: 10.5.2
- **react**: 18.2.0
- **react-beautiful-dnd**: 13.1.1
- **react-dom**: 18.2.0
- **react-hook-form**: 7.51.2
- **react-icons**: 5.0.1
- **react-js-pagination**: 3.0.3
- **react-spinners**: 0.13.8
- **react-transition-group**: 4.4.5
- **recharts**: 2.12.6
- **shadcn-ui**: 0.8.0
- **sharp**: 0.33.3
- **swiper**: 11.1.3
- **tailwind-merge**: 2.2.2
- **tar**: 7.1.0
- **zustand**: 4.5.2

## 📁 Project Structure

```bash
.
├── Dockerfile
├── README.md
├── api
│   ├── admin
│   │   ├── adminContestAPI.ts
│   │   ├── adminDashboardAPI.ts
│   │   ├── adminExamAPI.ts
│   │   ├── adminInquiryAPI.ts
│   │   ├── adminNoticeAPI.ts
│   │   ├── adminProblemAPI.ts
│   │   └── adminUserAPI.ts
│   ├── authAPI.ts
│   ├── inquiryAPI.ts
│   ├── memberAPI.ts
│   ├── noticeAPI.ts
│   ├── problemAPI.ts
│   ├── professor
│   │   ├── professorDashboardAPI.ts
│   │   ├── professorExamAPI.ts
│   │   ├── professorInfoAPI.ts
│   │   └── professorInquiryAPI.ts
│   └── testAPI.ts
├── app
│   ├── (auth)
│   │   ├── login
│   │   │   ├── _components
│   │   │   │   └── LoginForm.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── pwinquiry
│   │   │   ├── _components
│   │   │   │   └── PwInquiryFrom.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── signup
│   │       ├── _components
│   │       │   ├── SignupCard.tsx
│   │       │   └── SignupForm.tsx
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── (landing)
│   │   ├── _components
│   │   │   ├── LandingHeader.tsx
│   │   │   ├── LandingHeaderLoginButton.tsx
│   │   │   └── TextTypingAni.tsx
│   │   └── page.tsx
│   ├── (site)
│   │   ├── _components
│   │   │   ├── HeaderButton.tsx
│   │   │   ├── HeaderLoginButton.tsx
│   │   │   ├── HeaderMemberDropdown.tsx
│   │   │   └── HeaderNav.tsx
│   │   ├── contest
│   │   │   ├── [examId]
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── _components
│   │   │   │   └── ContestTable.tsx
│   │   │   └── page.tsx
│   │   ├── exam
│   │   │   ├── [examId]
│   │   │   │   ├── layout.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── _components
│   │   │   │   └── ExamTable.tsx
│   │   │   └── page.tsx
│   │   ├── inquiry
│   │   │   ├── [inquiryId]
│   │   │   │   └── page.tsx
│   │   │   ├── _components
│   │   │   │   └── InquiryTable.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── write
│   │   │       ├── InquiryForm.tsx
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   ├── main
│   │   │   ├── _components
│   │   │   │   ├── MainBanner.tsx
│   │   │   │   ├── MainNotice.tsx
│   │   │   │   └── MainProblem.tsx
│   │   │   └── page.tsx
│   │   ├── notice
│   │   │   ├── [noticeId]
│   │   │   │   └── page.tsx
│   │   │   ├── _components
│   │   │   │   └── NoticeTable.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── problem
│   │   │   ├── _components
│   │   │   │   └── ProblemTable.tsx
│   │   │   ├── feedback
│   │   │   │   └── [submissionId]
│   │   │   │       └── page.tsx
│   │   │   └── page.tsx
│   │   ├── profile
│   │   │   ├── @modal
│   │   │   │   ├── (.)withdrawal
│   │   │   │   │   └── page.tsx
│   │   │   │   └── default.tsx
│   │   │   ├── _components
│   │   │   │   ├── LanguageForm.tsx
│   │   │   │   ├── MemberProblemTable.tsx
│   │   │   │   ├── MemberSolProblemTable.tsx
│   │   │   │   ├── ProfileCard.tsx
│   │   │   │   └── RatingHelperCard.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   ├── settings
│   │   │   │   ├── @modal
│   │   │   │   │   ├── (.)password
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── default.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── password
│   │   │   │       └── page.tsx
│   │   │   └── withdrawal
│   │   │       └── page.tsx
│   │   └── ranking
│   │       ├── _components
│   │       │   └── RankingTable.tsx
│   │       └── page.tsx
│   ├── admin
│   │   ├── _components
│   │   │   ├── AiToken.tsx
│   │   │   ├── CodeViewer.tsx
│   │   │   ├── HealthCheck.tsx
│   │   │   ├── InquiryList.tsx
│   │   │   ├── SideAdminNav.tsx
│   │   │   └── TodaySubmission.tsx
│   │   ├── admin-manage
│   │   │   ├── _components
│   │   │   ├── edit
│   │   │   │   ├── _components
│   │   │   │   │   └── EditAdminForm.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── enroll
│   │   │   │   ├── _components
│   │   │   │   │   └── CreateAdminForm.tsx
│   │   │   │   └── page.tsx
│   │   │   └── my-account
│   │   │       ├── _components
│   │   │       │   └── EditAdminMyAccountForm.tsx
│   │   │       └── page.tsx
│   │   ├── contest-manage
│   │   │   ├── edit
│   │   │   │   ├── @modal
│   │   │   │   │   ├── (.)testcase
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── default.tsx
│   │   │   │   ├── _components
│   │   │   │   │   ├── AddCandidate.tsx
│   │   │   │   │   ├── EditContestForm.tsx
│   │   │   │   │   └── ProblemForm.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── testcase
│   │   │   │       └── page.tsx
│   │   │   ├── enroll
│   │   │   │   ├── @modal
│   │   │   │   │   ├── (.)testcase
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── default.tsx
│   │   │   │   ├── _components
│   │   │   │   │   ├── AddCandidate.tsx
│   │   │   │   │   ├── EnrollContestForm.tsx
│   │   │   │   │   └── ProblemForm.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── testcase
│   │   │   │       └── page.tsx
│   │   │   ├── list
│   │   │   │   ├── _component
│   │   │   │   │   └── ContestManageTable.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── page.tsx
│   │   │   └── result
│   │   │       ├── [testId]
│   │   │       │   ├── _components
│   │   │       │   │   └── ExamResult.tsx
│   │   │       │   └── page.tsx
│   │   │       └── list
│   │   │           └── [examId]
│   │   │               ├── _components
│   │   │               │   └── ExamResultList.tsx
│   │   │               └── page.tsx
│   │   ├── exam-manage
│   │   │   ├── _components
│   │   │   ├── edit
│   │   │   │   ├── @modal
│   │   │   │   │   ├── (.)testcase
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── default.tsx
│   │   │   │   ├── _components
│   │   │   │   │   ├── AddCandidate.tsx
│   │   │   │   │   ├── EditExamForm.tsx
│   │   │   │   │   └── ProblemForm.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── testcase
│   │   │   │       └── page.tsx
│   │   │   ├── enroll
│   │   │   │   ├── @modal
│   │   │   │   │   ├── (.)testcase
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── default.tsx
│   │   │   │   ├── _components
│   │   │   │   │   ├── AddCandidate.tsx
│   │   │   │   │   ├── EnrollExamForm.tsx
│   │   │   │   │   └── ProblemForm.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── testcase
│   │   │   │       └── page.tsx
│   │   │   ├── list
│   │   │   │   ├── _components
│   │   │   │   │   └── ExamManageTable.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── page.tsx
│   │   │   ├── result
│   │   │   │   ├── [testId]
│   │   │   │   │   ├── _components
│   │   │   │   │   │   └── ExamResult.tsx
│   │   │   │   │   └── page.tsx
│   │   │   │   └── list
│   │   │   │       └── [examId]
│   │   │   │           ├── _components
│   │   │   │           │   └── ExamResultList.tsx
│   │   │   │           └── page.tsx
│   │   │   └── style.css
│   │   ├── inquiry-manage
│   │   │   ├── [inquiryId]
│   │   │   │   ├── _components
│   │   │   │   │   ├── Inquiryreply.tsx
│   │   │   │   │   └── Inquiryreplyempty.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── _components
│   │   │   │   └── InquiryManageTable.tsx
│   │   │   ├── list
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── notice-manage
│   │   │   ├── [noticeId]
│   │   │   │   ├── _components
│   │   │   │   │   └── NoticeDetailPage.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── enroll
│   │   │   │   ├── _components
│   │   │   │   │   └── CreateNoticeForm.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── list
│   │   │   │   ├── _components
│   │   │   │   │   └── NoticeManageTable.tsx
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── page.tsx
│   │   ├── problem-manage
│   │   │   ├── _components
│   │   │   ├── edit
│   │   │   │   └── editor
│   │   │   │       ├── @modal
│   │   │   │       │   ├── (.)testcase
│   │   │   │       │   │   └── page.tsx
│   │   │   │       │   └── default.tsx
│   │   │   │       ├── _components
│   │   │   │       │   └── ProblemForm.tsx
│   │   │   │       ├── layout.tsx
│   │   │   │       ├── page.tsx
│   │   │   │       └── testcase
│   │   │   │           └── page.tsx
│   │   │   ├── enroll
│   │   │   │   └── editor
│   │   │   │       ├── @modal
│   │   │   │       │   ├── (.)testcase
│   │   │   │       │   │   └── page.tsx
│   │   │   │       │   └── default.tsx
│   │   │   │       ├── _components
│   │   │   │       │   └── ProblemForm.tsx
│   │   │   │       ├── layout.tsx
│   │   │   │       ├── page.tsx
│   │   │   │       └── testcase
│   │   │   │           └── page.tsx
│   │   │   ├── list
│   │   │   │   ├── _components
│   │   │   │   │   └── ProblemManageTable.tsx
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── professor-manage
│   │   │   ├── _components
│   │   │   ├── edit
│   │   │   │   ├── _components
│   │   │   │   │   └── EditProfessorForm.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── enroll
│   │   │   │   ├── _components
│   │   │   │   │   └── CreateProfessorForm.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── list
│   │   │   │   ├── _components
│   │   │   │   │   └── ProfessorManageTable.tsx
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   └── user-manage
│   │       ├── _components
│   │       ├── edit
│   │       │   ├── _components
│   │       │   │   └── EditUserForm.tsx
│   │       │   └── page.tsx
│   │       ├── enroll
│   │       │   ├── _components
│   │       │   │   └── CreateUserForm.tsx
│   │       │   └── page.tsx
│   │       ├── list
│   │       │   ├── _components
│   │       │   │   └── userManageTable.tsx
│   │       │   └── page.tsx
│   │       └── page.tsx
│   ├── algorithm-ide
│   │   ├── @modal
│   │   │   ├── (.)setting
│   │   │   │   └── page.tsx
│   │   │   └── default.tsx
│   │   ├── [problemId]
│   │   │   └── page.tsx
│   │   ├── _components
│   │   │   ├── HistoryModal.tsx
│   │   │   ├── IdeFooter.tsx
│   │   │   ├── IdeGuestFooter.tsx
│   │   │   ├── IdeHeaderMemberDropdown.tsx
│   │   │   ├── IdeMain.tsx
│   │   │   ├── IdeProblemWindow.tsx
│   │   │   ├── IdeResultWindow.tsx
│   │   │   ├── ResultModal.tsx
│   │   │   └── TestcaseModal.tsx
│   │   ├── layout.tsx
│   │   └── setting
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── professor
│   │   ├── _components
│   │   │   ├── GachonOJShortCut.tsx
│   │   │   ├── GuideShortCut.tsx
│   │   │   ├── IncorrectAlgorithm.tsx
│   │   │   ├── IncorrectRateQuestions.tsx
│   │   │   ├── LanguageGraph.tsx
│   │   │   ├── OngoingExams.tsx
│   │   │   └── SideProfessorNav.tsx
│   │   ├── exam-manage
│   │   │   ├── edit
│   │   │   │   ├── @modal
│   │   │   │   │   ├── (.)testcase
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── default.tsx
│   │   │   │   ├── _components
│   │   │   │   │   ├── AddCandidate.tsx
│   │   │   │   │   ├── EditExamForm.tsx
│   │   │   │   │   └── ProblemForm.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── testcase
│   │   │   │       └── page.tsx
│   │   │   ├── enroll
│   │   │   │   ├── @modal
│   │   │   │   │   ├── (.)testcase
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── default.tsx
│   │   │   │   ├── _components
│   │   │   │   │   ├── AddCandidate.tsx
│   │   │   │   │   ├── EnrollExamForm.tsx
│   │   │   │   │   └── ProblemForm.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── testcase
│   │   │   │       └── page.tsx
│   │   │   └── list
│   │   │       ├── _components
│   │   │       │   └── ExamTable.tsx
│   │   │       └── page.tsx
│   │   ├── inquiry
│   │   │   ├── [InquiryId]
│   │   │   │   ├── _components
│   │   │   │   │   └── Inquiryreply.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── list
│   │   │   │   ├── _components
│   │   │   │   │   └── InquiryTable.tsx
│   │   │   │   └── page.tsx
│   │   │   └── write
│   │   │       ├── _components
│   │   │       │   └── InquriyForm.tsx
│   │   │       └── page.tsx
│   │   ├── layout.tsx
│   │   ├── my-account
│   │   │   ├── _components
│   │   │   │   └── EditProfessorMyAccountForm.tsx
│   │   │   ├── page.tsx
│   │   │   └── withdrawl
│   │   │       └── page.tsx
│   │   └── page.tsx
│   └── test-ide
│       ├── @modal
│       │   ├── (.)setting
│       │   │   └── page.tsx
│       │   └── default.tsx
│       ├── [examId]
│       │   └── page.tsx
│       ├── _components
│       │   ├── HistoryModal.tsx
│       │   ├── IdeFooter.tsx
│       │   ├── IdeGuestFooter.tsx
│       │   ├── IdeHeaderMemberDropdown.tsx
│       │   ├── IdeMain.tsx
│       │   ├── IdeProblemWindow.tsx
│       │   ├── IdeResultWindow.tsx
│       │   ├── ResultModal.tsx
│       │   └── TestcaseModal.tsx
│       ├── layout.tsx
│       └── setting
│           └── page.tsx
├── components
│   ├── badge
│   │   ├── DiffBadge.tsx
│   │   └── RankBadge.tsx
│   ├── button
│   │   ├── CategoryButton.tsx
│   │   └── FullButton.tsx
│   ├── card
│   │   ├── AuthCard.tsx
│   │   ├── GuestProbCard.tsx
│   │   ├── MemberProbInfoCard.tsx
│   │   ├── MemberTestInfoCard.tsx
│   │   ├── ProfessorProblemCard.tsx
│   │   ├── ProfessorTestCard.tsx
│   │   ├── RecProblemCard.tsx
│   │   └── TestCard.tsx
│   ├── footer
│   │   └── SiteFooter.tsx
│   ├── header
│   │   └── IdeHeader.tsx
│   ├── modal
│   │   ├── ModalLarge.tsx
│   │   └── ModalSmall.tsx
│   ├── nav
│   │   └── manage
│   │       ├── AdminHeader.tsx
│   │       ├── BreadCrumbs.tsx
│   │       └── sidenav
│   │           └── SideNavAccount.tsx
│   └── pagination
│       ├── PaginationBar.css
│       └── PaginationBar.tsx
├── constants
│   ├── breadCrumbsMap.ts
│   ├── difficultyColorMap.ts
│   ├── memberConstants.ts
│   ├── programLangMap.ts
│   └── rankImageMap.ts
├── lib
│   ├── ReactQueryClient.tsx
│   ├── axiosConfig.ts
│   ├── columnHelper.tsx
│   ├── copyClipboard.tsx
│   └── utils.ts
├── mocks
│   ├── ADMIN_MOCK_DATA.json
│   └── PROBLEM_MOCK_DATA.json
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── providers
│   └── theme-provider.tsx
├── public
│   ├── GCOJ.png
│   ├── fonts
│   │   ├── Pretendard-Black.ttf
│   │   ├── Pretendard-Bold.ttf
│   │   ├── Pretendard-ExtraBold.ttf
│   │   ├── Pretendard-ExtraLight.ttf
│   │   ├── Pretendard-Light.ttf
│   │   ├── Pretendard-Medium.ttf
│   │   ├── Pretendard-Regular.ttf
│   │   ├── Pretendard-SemiBold.ttf
│   │   └── Pretendard-Thin.ttf
│   ├── images
│   │   ├── banner
│   │   │   ├── banner_1_img.png
│   │   │   ├── banner_2_img.png
│   │   │   ├── banner_3_img.png
│   │   │   └── default_banner_img.png
│   │   ├── gachon_univ_image.png
│   │   ├── landing
│   │   │   ├── landing_ide_image.png
│   │   │   ├── landing_monitoring_image.png
│   │   │   ├── landing_prob_image.png
│   │   │   ├── landing_rank_image.png
│   │   │   └── landing_test_image.png
│   │   ├── logo
│   │   │   ├── gachonoj_logo.png
│   │   │   └── gachonoj_logo_white.png
│   │   ├── main_banner.png
│   │   └── rank
│   │       ├── rank0.png
│   │       ├── rank1.png
│   │       ├── rank2.png
│   │       ├── rank3.png
│   │       ├── rank4.png
│   │       └── rank5.png
│   ├── next.svg
│   └── vercel.svg
├── react-table-config.d.ts
├── store
│   ├── useProgramLangStore.ts
│   ├── useTestCaseStore.ts
│   └── useUserStore.ts
├── tailwind.config.ts
├── tsconfig.json
└── types
    ├── admin
    │   ├── admin.ts
    │   ├── contest.ts
    │   ├── dashboard.ts
    │   ├── exam.ts
    │   ├── inquiry.ts
    │   ├── notice.ts
    │   ├── problem.ts
    │   └── user.ts
    ├── auth.ts
    ├── inquiry.ts
    ├── member.ts
    ├── notice.ts
    ├── problem.ts
    ├── professor
    │   ├── dashboard.ts
    │   ├── exam.ts
    │   ├── inquiry.ts
    │   └── user.ts
    ├── rank.ts
    └── test.ts

```

## 📚 Skills

<img width="500px" src=''  alt="Frontend Skills"/>

## ⚙️ Infra

<img width="600px" src=''  alt="Infra"/>

## 🪄 CI/CD

<img width="600px" src=''  alt="CI/CD"/>

## 🤝 Team Collaboration Tool

<img width="600px" src=''  alt="Collaboration Tools"/>

© 2024 Gachon Univ. Online Judge. All Rights Reserved.
