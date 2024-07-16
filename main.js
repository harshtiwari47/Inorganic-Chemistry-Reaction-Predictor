// main.js

import { reactions } from './sampleData.js';
import { reactants } from './reactantData.js';

// Function to populate select options based on data
export function populateSelectOptions(reactant1Id, reactant2Id, reactionTypeId) {
const reactant1Select = document.getElementById(reactant1Id);
const reactant2Select = document.getElementById(reactant2Id);
const reactionTypeSelect = document.getElementById(reactionTypeId);

// Get unique reactants and reaction types
const uniqueReactants1 = getUniqueReactants('reactant1');
const uniqueReactants2 = getUniqueReactants('reactant2');
const uniqueTypes = getUniqueReactionTypes();

let reactantList = [...uniqueReactants1, ...uniqueReactants2]

// Populate reactant 1 select
populateOptions(reactant1Select, reactantList);

// Populate reactant 2 select
populateOptions(reactant2Select, reactantList);

// Populate reaction type select
populateOptions(reactionTypeSelect, uniqueTypes);
}

// Function to populate options in a select element
function populateOptions(selectElement, options) {
options.forEach(option => {
const optionElement = document.createElement('option');
optionElement.value = option;
optionElement.textContent = option;
selectElement.appendChild(optionElement);
});
}

// Function to get unique reactants from predefined reactions
function getUniqueReactants(property) {
const uniqueReactants = [];
reactions.forEach(reaction => {
if (!uniqueReactants.includes(reaction[property])) {
uniqueReactants.push(reaction[property]);
}
});
return uniqueReactants;
}

// Function to get unique reaction types from predefined reactions
function getUniqueReactionTypes() {
const uniqueTypes = [];
reactions.forEach(reaction => {
if (!uniqueTypes.includes(reaction.type)) {
uniqueTypes.push(reaction.type);
}
});
return uniqueTypes;
}

// Function to handle button click and initiate prediction or error handling
export function predictReaction() {
const reactant1 = document.getElementById('reactant1').value;
const reactant2 = document.getElementById('reactant2').value;
const reactionType = document.getElementById('reactionType').value;

// Find the predefined reaction based on reactants and type
const selectedReaction = findReaction(reactant1, reactant2, reactionType);

if (!selectedReaction) {
// Attempt to auto-predict based on reactant types
autoPredictReactionByTypes(reactant1, reactant2);
return;
}

// Display the details of the selected reaction
displayReactionDetails(selectedReaction);
}

// Function to find a predefined reaction based on reactants and type
function findReaction(reactant1, reactant2, reactionType) {
return reactions.find(reaction =>
((reaction.reactant1 === reactant1 &&
reaction.reactant2 === reactant2) || (reaction.reactant2 === reactant1 &&
reaction.reactant1 === reactant2)) &&
reaction.type === reactionType
);
}

// Function to automatically predict a reaction based on reactant types
function autoPredictReactionByTypes(reactant1, reactant2) {
// Find any reaction that matches the reactant types
const matchingReactions = reactions.filter(reaction =>
(reaction.reactant1Type === getReactantType(reactant1) || reaction.reactant1Type === getReactantType(reactant2)) &&
(reaction.reactant2Type === getReactantType(reactant2) || reaction.reactant2Type === getReactantType(reactant1))
);

if (matchingReactions.length === 0) {
displayResult(`No matching reaction found for selected reactants:\nReactant 1: ${reactant1}\nReactant 2: ${reactant2}`);
return;
}

// Display details of the first matching reaction found
displayReactionDetails(matchingReactions[0]);
}

// Function to get the type of a reactant
function getReactantType(reactantName) {
const reaction = reactions.find(reaction => reaction.reactant1 === reactantName || reaction.reactant2 === reactantName);
return reaction ? (reaction.reactant1 === reactantName ? reaction.reactant1Type: reaction.reactant2Type): null;
}

// Function to display details of the selected reaction
export function displayReactionDetails(reaction) {
const resultContainer = document.getElementById('result');

resultContainer.innerHTML = `
<h3>${reaction.type.toUpperCase()} Reaction</h3>
<p><strong>Reactants:</strong> ${reaction.reactant1}, ${reaction.reactant2}</p>
<p><strong>Product:</strong> ${reaction.product}</p>
<p><strong>Details:</strong> ${reaction.details}</p>
<p><strong>Formula:</strong> ${reaction.formula}</p>
<p><strong>Steps Involved:</strong></p>
<ol>
${reaction.steps.map(step => `<li>${step}</li>`).join('')}
</ol>
`;
}

// Function to display result message
function displayResult(message) {
const resultContainer = document.getElementById('result');
resultContainer.textContent = message;
}