module.exports = (used, free) => {
    const full = "▰";
    const empty = "▱";
    const total = used + free;
    used = Math.round((used / total) * 10);
    free = Math.round((free / total) * 10);
    return full.repeat(used) + empty.repeat(free);
}