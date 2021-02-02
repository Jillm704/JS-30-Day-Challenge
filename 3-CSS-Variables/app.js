//Select all inputs within the .controls class.
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || ''; //sizing Or nothing.
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));