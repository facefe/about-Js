// 实现一个列表
/*
属性:listSize:列表元素个数
    :pos 列表当前元素
    :length 返回列表中的元素个数
    :clear 清空列表
    :toStr 返回的字符串形式
    :getElemet 返回指定列表元素
    :inser 在现有元素后面插入新的元素
    :append 在列表的末尾插入元素 可以插入任意多个元素
    :remove 从列表中删除元素
    :front 从列表的当前元素移动到 开始位置
    :end 从列表的当前位置移动到 末尾
    :prev 将当前元素后移动一位
    :next 将当前元素前移动一位
    :currPos 返回当前列表位置
    :movetTo 将当前元素移动到 指定位置

 */
let List = class {
    constructor() {
        this.ListSize = 0
        this.pos = 0
        this.dataStore = new Array()
    }
    append(...agr) {
        for (let val in agr) {
            this.dataStore[this.ListSize++] = agr[val]
        }
    }

    find(ele) {
        this.dataStore.forEach(function (val, index) {
            if (val === ele) {
                return index
            } else {
                return -1
            }
        })
    }
    remove(ele) {
        let finded = this.find(ele)
        if (finded !== -1) {
            this.dataStore.splice(finded, 1)
            this.ListSize--
        }
    }

    // length 返回列表中有多少个元素
    lthgth() {
        return this.ListSize
    }
    //toStr 显示当前列表的所有元素
    toStr() {
        return this.dataStore
    }
    inser(ele, after) {
        let inserEle = this.find(after)
        if (inserEle !== -1) {
            this.dataStore.splice(inserEle, 0, ele)
            this.ListSize++
        }
        return false
    }
    clear() {
        //清空元素
        this.dataStore = []
        this.ListSize = 0
    }

}


// 一个简单的列表结构，
// 其实就是数组的封装。