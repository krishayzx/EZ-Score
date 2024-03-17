// script.js
document.addEventListener('DOMContentLoaded', function() {
    const assignments = [
        // Populate with your assignment objects
        { name: 'HW 5', status: 'No Submission', due:'Mar 20 at 11:59PM' },
        // ... more assignments
        { name: 'HW 6', status: 'Submitted', due:'Mar 16 at 11:59PM' },
    ];

    const assignmentsTable = document.getElementById('assignments');
    assignments.forEach(function(assignment) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${assignment.name}</td>
            <td class="${assignment.status.toLowerCase().replace(/\s+/g, '-')}" data-label="Status">
                <span class="status-dot"></span> ${assignment.status}
            </td>
            <td data-label="Released">${assignment.released}</td>
            <td data-label="Due">${assignment.due}</td>
        `;
        assignmentsTable.appendChild(tr);
    });
});
