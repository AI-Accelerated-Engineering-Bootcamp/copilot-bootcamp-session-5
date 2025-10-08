# Step 5-1: Test-Driven Development Workflow

## Goal

Learn to work with AI assistants in a Test-Driven Development (TDD) workflow by fixing failing backend tests iteratively. You'll experience the Red-Green-Refactor cycle: run tests (Red), implement code (Green), improve quality (Refactor), and repeat.

## Background

The backend has **comprehensive tests that currently fail** because the implementation is incomplete or buggy. Your job is to make these tests pass one by one using Copilot as your pair programming partner.

## Instructions

### :keyboard: Activity: Launch a Codespace and create a branch

1. Click the below button to open the **Create Codespace** page in a new tab. Use the default configuration.

   [![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/{{full_repo_name}}?quickstart=1)

2. Confirm the **Repository** field is your copy of the exercise, then click the green **Create Codespace** button.

3. :pencil2: Create a new branch called `feature/tdd-backend` :pencil2:

### :keyboard: Activity: Understand the current state

1. Open the terminal and navigate to the backend package:

   ```bash
   cd packages/backend
   ```

2. Run the tests to see what's failing:

   ```bash
   npm test
   ```

3. You should see **multiple test failures**. This is expected! These failures are your roadmap.

4. Open `__tests__/app.test.js` and read through the tests. Each test describes what the code should do.

### :keyboard: Activity: Practice TDD with Copilot

#### Round 1: Fix the GET /api/todos endpoint

1. Open **Copilot** chat panel (or press `Ctrl+Alt+I` / `Cmd+Alt+I`).

2. Switch to your **TDD Developer** custom chat mode (the one you created in Step 5-0).

3. Ask your TDD Developer assistant to explain the first failing test:

   ```
   Show me the first failing test in packages/backend/__tests__/app.test.js
   and explain what it expects.
   ```

4. Once you understand the test, ask Copilot to help you fix the code:

   ```
   The test expects GET /api/todos to return an empty array initially,
   but it's failing. Look at packages/backend/src/app.js and fix the
   initialization issue.
   ```

5. After Copilot makes changes, run the tests again:

   ```bash
   npm test
   ```

6. If that test now passes, move to the next one!

#### Round 2: Implement POST /api/todos

1. Ask Copilot to show you the POST endpoint tests:

   ```
   Show me all tests for POST /api/todos in the test file.
   ```

2. Implement the endpoint to pass these tests:

   ```
   Implement the POST /api/todos endpoint in packages/backend/src/app.js
   to pass all its tests. It should:
   - Validate that title is provided and not empty (return 400 if invalid)
   - Generate a unique ID
   - Create a todo with id, title, completed: false, and createdAt timestamp
   - Return 201 status with the created todo
   ```

3. Run tests after implementation:

   ```bash
   npm test -- --testNamePattern="POST /api/todos"
   ```

4. Fix any failures iteratively with Copilot's help.

#### Round 3: Implement PUT /api/todos/:id

1. Follow the same pattern:

   - Read the PUT endpoint tests
   - Ask Copilot to implement the endpoint
   - Run tests
   - Fix failures
   - Iterate until all PUT tests pass

2. Suggested prompt:
   ```
   Implement the PUT /api/todos/:id endpoint to pass its tests.
   It should update the todo's title and return 404 if not found.
   ```

#### Round 4: Fix the PATCH toggle bug

1. The PATCH endpoint has a **logical bug**. Ask Copilot:

   ```
   The PATCH /api/todos/:id/toggle endpoint has a bug - it always sets
   completed to true instead of toggling. Find and fix this bug in
   packages/backend/src/app.js
   ```

2. Run the toggle tests:

   ```bash
   npm test -- --testNamePattern="toggle"
   ```

3. Verify both tests pass (incomplete → complete AND complete → incomplete).

#### Round 5: Implement DELETE /api/todos/:id

1. Implement the DELETE endpoint:

   ```
   Implement DELETE /api/todos/:id to remove a todo from the array
   and return 404 if not found.
   ```

2. Run all tests:
   ```bash
   npm test
   ```

### :keyboard: Activity: Verify all tests pass

1. Run the complete test suite:

   ```bash
   npm test
   ```

2. All tests should pass! If any still fail:

   - Share the error with Copilot
   - Ask for help debugging
   - Fix and retest

3. Commit your changes:

   ```bash
   git add .
   git commit -m "Fix all backend tests using TDD workflow"
   ```

4. :arrow_up: Push your changes to the `feature/tdd-backend` branch :arrow_up:

## Success Criteria

To complete this exercise successfully:

- ✅ All tests in `packages/backend/__tests__/app.test.js` pass
- ✅ Changes are pushed to the `feature/tdd-backend` branch

## Reflection Questions

After completing this step, consider:

1. How did having tests guide your implementation?
2. What was the benefit of fixing tests one at a time?
3. How did Copilot help you understand what the tests expected?
4. Did you encounter any "false passes" where you thought you were done but weren't?

## What You Learned

✨ **TDD Workflow**: Writing (or running) tests first, then implementing to pass
✨ **Iterative Development**: Small steps with continuous validation
✨ **AI Pair Programming**: Using Copilot to understand requirements and implement solutions
✨ **Error-Driven Development**: Letting test failures guide your next action

---

Great work! Move on to the next step where you'll clean up code quality with linting.
