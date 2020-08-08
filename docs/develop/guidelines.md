# 开发规范

## 代码平台

<del>使用 https://git.lug.ustc.edu.cn/ 平台</del>

使用 GitHub 平台（[GitHub is now free for teams - The GitHub Blog](https://github.blog/2020-04-14-github-is-now-free-for-teams/)）

## License

[GNU AGPLv3](https://opensource.org/licenses/AGPL-3.0)

## Git

1. No binary files.

2. Commit message: English, first letter capitalized, short (50 chars or less), no period.

3. No `git push --force`.

4. Always use LF instead of CRLF. (Tips for Windows users: `git config --global core.autocrlf false`, `git config --global core.eol lf`, see [Stack Overflow](https://stackoverflow.com/a/13154031/8418049)).

5. Workflow: 

   ```bash
   git checkout -b xxx-feature
   
   ...
   git commit -m "Finish first part"
   
   ...
   git commit -m "Finish second part"
   
   git checkout master
   git pull
   
   # Disable fast-forward, always create a new commit object
   git merge --no-ff xxx-feature
   
   # If conflicts occur, resolve them, then run `git {add|rm}` on conflicts file(s)
   git {add|rm} <file>
   # With all conflicts resovled, run
   git commit [-m "Resolved merge conflict by ..."]
   # For more details, see https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-using-the-command-line
   
   git branch -d xxx-feature
   git push
   ```

## ESLint

1. Style guide: Airbnb.
2. Use `...eslint-disable...` as little as possible.

## TypeScript

Use TypeScript, but use object-based API in Vue 2.x instead of class-based API. See [typescript.md](./discuss/typescript.md) for more details.

## UI & UX

<del>模仿 hackerrank.com</del>

## 评分机制

***由于官方公布了评分机制，以下条目暂时失效。***

1. 不搞绝对平均；
2. 根据功能/模块实现量、难度和完成度、commit 代码量等来确定；
3. 大家每个人列出自己完成的功能/模块，之后每个人申报自己的期望得分，用某种机制使得可以匿名对某人申报的分数提出异议，如无异议，则这部分分数生效，占比 50%；另外 50%，对于组长，用某种机制让组员给组长匿名打分，取平均，对于其他组员，得分由组长确定（组长根据功能/模块难度、完成度、commit 代码量等来综合判断，若有异议，提出后共同商量；若组长不能清晰判断每个人的工作量、工作难度，则他应该采取尽量减少差距的保守策略。）；
4. 组长得分 <= max(其他组员得分)，max(所有人得分) <= 1.5 * min(所有人得分)。以上约束如果不成立，“调分”。