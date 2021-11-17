- [Requirements](#requirements)
- [Starting the development server](#starting-the-development-server)
- [Modules](#modules)
  - [Learning Modules](#learning-modules)
    - [Text](#text)
    - [List](#list)
    - [Video](#video)
  - [Practice Modules](#practice-modules)
    - [`Yes or No questions`](#yes-or-no-questions)
    - [`Multiple choice questions`](#multiple-choice-questions)
  - [Module references](#module-references)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start)

# Requirements

- Install [Node.js](https://nodejs.org/en/)
- run the command `npm install`

# Starting the development server

- Run the `npm start` command.
  - [Help](#npm-start)

# Modules

All the modules are in the [modules.json](src/modules.json) file.

Learning and practice modules are together in the same object. The `info` property will be displayed when in learning mode and the questions property will be used in practice mode.

## Learning Modules

The learning module corresponds to the `info` property of each module.

The value of this property is an array of info objects. There are 3 types of info objects: text, list and video. All info objects have a property `type` that denotes their type.

```json
"info": [{
        "type": "video/youtube",
        "link": "https://www.youtube.com/embed/rzsVh8YwZEQ"
    },{
        "type": "text",
        "text": "Active listening requires us as listeners to capture what the sender is communicating from the sender's point of view through verbal and non-verbal cues.​ More than that, we must convey to the sender that we are seeing things from the sender's point of view.​ We can never be sure to understand another person completely or in detail. Therefore, it is essential in active listening that the listener frequently and continuously validates the accuracy of understanding in order to keep distortion and misunderstandings at a minimum."
}]
```

### Text

Info objects of the type text should have a `string` they want to show in the property `text`.

```json
{
    "type": "text",
    "text": "Active listening requires us as listeners to capture what the sender is communicating from the sender's point of view through verbal and non-verbal cues.​ More than that, we must convey to the sender that we are seeing things from the sender's point of view.​ We can never be sure to understand another person completely or in detail. Therefore, it is essential in active listening that the listener frequently and continuously validates the accuracy of understanding in order to keep distortion and misunderstandings at a minimum."
}
```

### List

Info objects of the type `text/list` should have the list they want to show in the property `items` as a `string` `array`.

```json
{
    "type": "text/list",
    "items": [
        "Paraphrasing - It shows interest and encourage others to keep talking. It consists in restating the information spoken with the listern's own words.",
        "Verbalizing Emotions - It shows the speaker that the listener understands his or her feelings and helps build empathy.",
        "Asking - Asking is done with the intention of acquiring more information, which will make the speaker think the listener is invested in the conversation."
    ]
}
```

### Video

Info objects of the type `video/youtube` should have the video they want to show in the property `link` as an `url`. This URL can be obtained from a youtube video by clicking the **share** option and then **embed**.

```json
{
    "type": "video/youtube",
    "link": "https://www.youtube.com/embed/rzsVh8YwZEQ"
}
```

## Practice Modules

The practice modules consist of the `questions` property on each module. The value of this property should be an array of question objects.

There are two types of questions: `Yes or No questions` and `multiple choice questions`.

### `Yes or No questions`
These objects have 3 properties: 
- question: `string`
  - The question to be asked
- answer: `bool`
  - The yes(true) or no(false) to the question
- help: `string`
  - A message that is shown when the user answer the question wrong

### `Multiple choice questions`
- question: `string`
  - The question to be asked
- options: `string[]`
  - The possible choices
- answer: `integer`
  - The index of the correct choice
- help: `string` || `string[]`
  - A message that is shown when the user answer the question wrong. If it is an array it will show the adequate help text according to the answer order. The array must have `length` equal to the number of answers - 1.

```json
"questions": [
    {
        "question": "Is active listening all about what the other person is saying?",
        "answer": false,
        "help": "No, it's about what they are saying and what their body language is showing."
    },
    {
        "question": "Does the listener only have to attentively listen and read the speaker's body language?",
        "options": [
            "Of course",
            "No, he also has to show that he is listening and understanding what is being said.",
            "No, he only has to listen."
        ]
        "answer": 1,
        "help": "No, it's important that the listener reinforces that they are listening, for example, through paraphrasing.​"
    }
]
```

## Module references
Some modules might require a list of the references used for its creation. In these cases, a `ref` property can be added to the `module` object.
- `ref`: Array
  - Each element is an object with two properties
    - `text` - The APA norm description of the material used as reference
    - `url` - The url where the material can be found. If there is no URL just use an empty string `""`.

```json
"ref": [
  {
    "text": "Bauer, C., & Figl, K. (2008, October). Active listening? in written online communication-a case study in a course on ?soft skills for computer scientists. In 2008 38th Annual Frontiers in Education Conference (pp. F2C-1). IEEE.",
    "url": "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=4720282"
  }
]
```
# Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.