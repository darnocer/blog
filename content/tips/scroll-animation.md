---
title: Reveal-on-scroll animation
summary:
date: 2023-12-10
aliases:
tags:
  - webflow
draft: false
type:
  - tip
layout:
  - PostSimple
category:
  - webflow
---

<Callout title="When to use" text="This is a simple Webflow animation you can apply to each element so that each element reveals itself when it is scrolled into view."/>

## Add an Interaction

1. Select an element > go to `Interactions` tab on the right-side panel
2. Add **Element Trigger** > `Scroll into view`
3. Define an action **When scrolled into view** > `Start an animation`
4. Under Timed Animations > `+ Add an Animation`
5. Name the animation `Reveal on Scroll`

### Configure the Animation

Add the following actions:

<details>
<summary>Add **Action**:  <span className="element">Move</span> </summary>
- **Affect**: <span className="option"><InteractionIcon /> Interaction Trigger</span>
- **Timing:** <span className="option">☑️ Set as Initial State</span>
- **Move:**
	- **Y =** `2 rem` 
</details>

<details>
<summary>Add **Action**: <span className="element">Opacity</span></summary>
- **Affect**: <span className="option"><InteractionIcon /> Interaction Trigger</span>
- **Timing:** <span className="option">☑️ Set as Initial State</span>
- **Opacity:** `0%`
</details>

<details>
<summary>Add **Action**:  <span className="element">Move</span></summary>
- **Affect**: <span className="option"><InteractionIcon /> Interaction Trigger</span>
- **Timing**: 
	- **Start:** <span className="option">After Previous Action</span>
	- **Delay:** `0s`
	- **Easing:** <span className="option">Out Circ</span>
	- **Duration:** `0.6 s`
- **Move:**
	- **Y =** `2 rem` 
</details>

<details>
<summary>Add **Action**:  <span className="element">Opacity</span></summary>
- **Affect**: <span className="option"><InteractionIcon /> Interaction Trigger</span>
- **Timing**: 
	- **Start:** <span className="option">With Previous Action</span>
	- **Delay:** `0s`
	- **Easing:** <span className="option">Ease Out</span>
	- **Duration:** `0.6 s`
- **Opacity:** `0%`
</details>

Once the base animation is configured, click **Done**.

Ensure this animation is selected as the Timed Animation for **When Scrolled Into View** for the selected element.

Add the Interaction for each element.
