module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  return { ...item, enhancement: Math.min(20, item.enhancement + 1) };
}

function fail(item) {
  if ( item.enhancement < 15) {
    return { ...item, enhancement: Math.max(0, item.enhancement - 5) }
  } else if ( item.enhancement === 15) {
    return { ...item, enhancement: item.enhancement - 10 };
  } else {
    return { ...item, enhancement: item.enhancement - 1 };
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
