# Step 5-0: Setup Your Workflow Assistant Chat Modes

## Goal

Before diving into iterative development workflows, you'll create **two custom Copilot chat modes** tailored for this session. These modes will be your AI pair programming partners, optimized for teaching TDD and code quality practices.

## Why Custom Chat Modes?

Custom chat modes give Copilot persistent context and behavior instructions. Instead of repeating "explain before implementing" every time, your custom mode will automatically:

- Guide you through step-by-step learning
- Explain concepts before showing code
- Encourage testing after each change
- Help you build good development habits

**You'll use these modes throughout Session 5 AND in your real work after the bootcamp!**

---

## Instructions

### :keyboard: Activity: Launch Codespace

1. Click the below button to open the **Create Codespace** page in a new tab. Use the default configuration.

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{full_repo_name}}?quickstart=1)

2. Confirm the **Repository** field is your copy of the exercise, then click the green **Create Codespace** button.

3. Wait for the Codespace to fully load (you'll see the workspace file tree).

### :keyboard: Activity: Create Custom Chat Mode #1 - TDD Developer

This mode will help you with test-driven development throughout the session.

1. Open **GitHub Copilot Chat** panel (icon in the left sidebar or `Ctrl+Alt+I` / `Cmd+Alt+I`)

2. Click the **settings icon** (gear) in the chat panel header

3. Select **"Manage custom instructions"** from the dropdown

4. Click **"+ New chat mode"**

5. **Use Copilot to generate the mode!** In the regular Copilot chat (switch to Agent mode, Claude Sonnet 4), ask:

   ```text
   Create a custom Copilot chat mode configuration for teaching Test-Driven Development.

   The mode should:
   - Act as a patient teaching assistant for TDD workflows
   - Always explain what tests expect BEFORE showing implementation code
   - Guide students through the Red-Green-Refactor cycle
   - Encourage running tests after each change
   - Break solutions into small, testable steps
   - Remind students to commit working code frequently
   - Help students understand WHY code works, not just HOW

   Context: This is for Session 5 of an AI Accelerated Engineering Bootcamp.
   The codebase has intentional bugs (todos = null, missing endpoints, toggle bugs).
   Students should fix tests iteratively, one at a time.

   Format the output as a custom chat mode configuration I can paste into VS Code.
   ```

6. Copilot will generate a configuration. **Review it** to understand what it does.

7. In the **New Chat Mode** dialog:
   - **Name**: `TDD Developer` (or your preferred name)
   - **Instructions**: Paste the configuration Copilot generated
   - Click **Save**

### :keyboard: Activity: Create Custom Chat Mode #2 - Code Reviewer

This mode will help you with code quality, linting, and best practices.

1. In the same Copilot Chat settings, click **"+ New chat mode"** again

2. Ask Copilot to generate the second mode:

   ```text
   Create a custom Copilot chat mode configuration for systematic code review and quality improvement.

   The mode should:
   - Act as a meticulous but friendly code reviewer
   - Explain ESLint errors clearly and suggest appropriate fixes
   - Categorize similar errors to fix them efficiently
   - Always remind to run tests after fixing lint errors
   - Encourage clean code practices (no console.logs in production, no unused vars)
   - Help students understand why code quality rules exist
   - Guide toward idiomatic JavaScript/React patterns

   Context: This is for Session 5 of an AI Accelerated Engineering Bootcamp.
   Students will fix backend and frontend lint errors after making tests pass.
   Focus on teaching WHY rules matter, not just mechanically fixing them.

   Format the output as a custom chat mode configuration I can paste into VS Code.
   ```

3. Review the generated configuration

4. In the **New Chat Mode** dialog:
   - **Name**: `Code Reviewer` (or your preferred name)
   - **Instructions**: Paste the configuration
   - Click **Save**

### :keyboard: Activity: Test Your Custom Modes

Let's verify both modes work correctly:

1. **Test TDD Developer Mode:**

   - Select **TDD Developer** from the chat mode dropdown
   - Ask: `What's the first step in fixing failing tests?`
   - You should get a response that guides you through understanding tests first

2. **Test Code Reviewer Mode:**
   - Select **Code Reviewer** from the chat mode dropdown
   - Ask: `What should I look for when reviewing code quality?`
   - You should get a response focused on linting, style, and best practices

### :keyboard: Activity: Create your feature branch

1. Now that your assistant modes are ready, create a new branch:

   ```bash
   git checkout -b feature/tdd-backend
   ```

---

## What You Just Did

🎉 **You created custom AI assistants tailored to specific workflows!**

- **TDD Developer**: Your pair programmer for test-driven development
- **Code Reviewer**: Your quality assurance partner

These aren't just for this bootcamp—you can:

- Use them in your real projects
- Customize them for your team's coding standards
- Create new modes for other workflows (debugging, architecture, security reviews)
- Share them with teammates

---

## Pro Tips for Using Custom Chat Modes

### Switching Between Modes

Throughout Session 5, switch modes based on your task:

- **TDD Developer**: When fixing failing tests, implementing features
- **Code Reviewer**: When running lint, cleaning up code quality
- **Agent mode (no custom)**: When you need general help or different perspective

### Customizing Further

After the session, you can refine your modes:

- Add your team's specific coding standards
- Include project-specific context
- Adjust the teaching style to your preference
- Create modes for other languages/frameworks

### Sharing with Your Team

These modes can be exported and shared:

1. Copy the instructions from your mode settings
2. Share with teammates via wiki, README, or internal docs
3. Everyone gets consistent AI assistance!

---

## Success Criteria

To complete this step successfully:

- ✅ Created "TDD Developer" custom chat mode
- ✅ Created "Code Reviewer" custom chat mode
- ✅ Tested both modes with sample questions
- ✅ Created `feature/tdd-backend` branch

---

## Reflection Questions

Before moving to the next step, consider:

1. How might custom chat modes improve your daily development workflow?
2. What other types of custom modes could be useful for your team?
3. How does giving Copilot context about TDD change its responses?

---

## What You Learned

✨ **Meta-Skill**: Using AI to create better AI tools (AI-assisted AI configuration!)

✨ **Custom Chat Modes**: Persistent context and behavior for specialized tasks

✨ **Workflow Optimization**: Tailoring tools to match your development process

✨ **Team Collaboration**: Creating shared AI assistants for consistency

---

## Next Steps

Now that you have your workflow assistants ready, let's put them to work!

In **Step 5-1**, you'll use your **TDD Developer** mode to fix failing backend tests iteratively, experiencing the Red-Green-Refactor cycle.

**Ready?** Once you see Step 5-1 instructions posted to this issue, you're ready to start test-driven development! 🚀

---

> 💡 **Remember**: The goal isn't just to fix the tests—it's to develop muscle memory for iterative, AI-assisted workflows you'll use in real projects.
