# Taiga Ogura - Portfolio / Resume Website

AWSの設計構築、SRE、IaC（Terraform / CDK）を得意とするクラウドインフラエンジニア「小倉 大河」のポートフォリオ兼職務経歴書サイトです。

## 公開先 (GitHub Pages)

GitHubのリポジトリ設定でGitHub Pagesを有効化すると、自動的に以下のURLで公開されます。
`https://<ユーザー名>.github.io/<リポジトリ名>/`

## プロジェクト構成

- [index.html](file:///Users/taiga.ogura/git/profile/index.html): ポートフォリオのメインHTML
- [style.css](file:///Users/taiga.ogura/git/profile/style.css): Glassmorphismを採用したモダンなダークテーマCSS
- [script.js](file:///Users/taiga.ogura/git/profile/script.js): プロジェクトのカテゴリフィルタやスクロールアニメーションを制御するJavaScript
- [resume.pdf](file:///Users/taiga.ogura/git/profile/resume.pdf): ダウンロード用の技術経歴書PDF
- [.github/workflows/deploy.yml](file:///Users/taiga.ogura/git/profile/.github/workflows/deploy.yml): GitHub Pagesへの自動デプロイを行うGitHub Actions

## ローカルでのプレビュー

ローカル環境で表示を確認したい場合は、VS Codeの「Live Server」拡張機能を使用するか、以下のコマンドで簡易HTTPサーバーを立ち上げてください。

```bash
# Pythonを使う場合
python3 -m http.server 8000
```

起動後、ブラウザで `http://localhost:8000` にアクセスしてください。

## GitHub Pagesへのデプロイ方法

1. **GitHubリポジトリの作成とプッシュ**:
   ```bash
   git add .
   git commit -m "feat: Add portfolio website and GitHub Actions workflow"
   git push origin main
   ```
2. **GitHub Pagesの設定**:
   - GitHub上のリポジトリの `Settings` タブを開きます。
   - 左側メニューの `Pages` を選択します。
   - **Build and deployment** の **Source** で `GitHub Actions` を選択します。
   - `deploy.yml` ワークフローが自動的にトリガーされ、数分でサイトが公開されます。