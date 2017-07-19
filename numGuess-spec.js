/*global collectSameElements*/
'use strict';

describe('numGuess', () => {

  const num = '1234';



  it("当四个数字和位置都猜对返回字符串'4A0B'", () => {
    let numInput='1234';
    const result = numGuess(numInput,num);
    expect(result).toEqual('4A0B');
  });

  it("当三个数字和位置都猜对，一个数字猜错，返回字符串'3A0B'", () => {
    let numInput='1235';
    const result = numGuess(numInput,num);
    expect(result).toEqual('3A0B');
  });

  it("当两个数字和位置都猜对，两个数字猜错，返回字符串'2A0B'", () => {
    let numInput='1256';
    const result = numGuess(numInput,num);
    expect(result).toEqual('2A0B');
  });

  it("当两个数字和位置都猜对，一个数字猜对位置猜错，一个数字猜错，返回字符串'2A1B'", () => {
    let numInput='1253';
    const result = numGuess(numInput,num);
    expect(result).toEqual('2A1B');
  });

  it("当两个数字和位置都猜对，两个数字猜对位置猜错，返回字符串'2A2B'", () => {
    let numInput='1243';
    const result = numGuess(numInput,num);
    expect(result).toEqual('2A2B');
  });

  it("当一个数字和位置都猜对，三个数字猜错，返回字符串'1A0B'", () => {
    let numInput='1567';
    const result = numGuess(numInput,num);
    expect(result).toEqual('1A0B');
  });

  it("当一个数字和位置都猜对，一个数字猜对位置猜错，两个数字猜错，返回字符串'1A1B'", () => {
    let numInput='1562';
    const result = numGuess(numInput,num);
    expect(result).toEqual('1A1B');
  });

  it("当一个数字和位置都猜对，两个数字猜对位置猜错，一个数字猜错，返回字符串'1A2B'", () => {
    let numInput='1523';
    const result = numGuess(numInput,num);
    expect(result).toEqual('1A2B');
  });

  it("当一个数字和位置都猜对，三个数字猜对位置猜错，返回字符串'1A3B'", () => {
    let numInput='1423';
    const result = numGuess(numInput,num);
    expect(result).toEqual('1A3B');
  });

  it("当零个数字和位置都猜对，四个数字猜错，返回字符串'0A0B'", () => {
    let numInput='5678';
    const result = numGuess(numInput,num);
    expect(result).toEqual('0A0B');
  });

  it("当零个数字和位置都猜对，三个数字猜错，一个数字猜对位置猜错，返回字符串'0A1B'", () => {
    let numInput='5671';
    const result = numGuess(numInput,num);
    expect(result).toEqual('0A1B');
  });

  it("当零个数字和位置都猜对，两个数字猜错，两个数字猜对位置猜错，返回字符串'0A2B'", () => {
    let numInput='5612';
    const result = numGuess(numInput,num);
    expect(result).toEqual('0A2B');
  });

  it("当零个数字和位置都猜对，一个数字猜错，三个数字猜对位置猜错，返回字符串'0A3B'", () => {
    let numInput='5123';
    const result = numGuess(numInput,num);
    expect(result).toEqual('0A3B');
  });

  it("当零个数字和位置都猜对，四个数字猜对位置猜错，返回字符串'0A4B'", () => {
    let numInput='4321';
    const result = numGuess(numInput,num);
    expect(result).toEqual('0A4B');
  });

});
