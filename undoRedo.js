function undoRedo(object) {
	return {
    _operationStack: [],
		set: function(key, value) {
      this._operationStack.push({
        operationType: "set",
        prevState:JSON.parse(JSON.stringify(object))
      });
      object[key] = value;
    },
		get: function(key) {
      return object[key];
    },
		del: function(key) {
      this._operationStack.push({
        operationType: "del",
        prevState:JSON.parse(JSON.stringify(object))
      });
      delete object[key];
    },
		undo: function() {
      console.log("UNDO");
      console.log(this._operationStack);
      if(this._operationStack.length<0){
        throw ReferenceError("there is no operation to undo");
      }
      let counter = this._operationStack.length-1;
      let lastOperation = this._operationStack[counter];
      while(lastOperation.operationType==="undo"){
        counter--;
        lastOperation = this._operationStack[counter];
      }
      this._operationStack.push({
        operationType: "undo",
        prevState:JSON.parse(JSON.stringify(object)),
        cancelledOperation: lastOperation,
      });
      for (const key in object) {
        delete object[key];
      }
      for (const key in lastOperation.prevState) {
        object[key] = lastOperation.prevState[key];
      }
      this._operationStack = this._operationStack.slice(0,counter).concat(this._operationStack.slice(counter+1,this._operationStack.length));
      console.log(this._operationStack);
    },
		redo: function() {
      console.log("REDO");
      console.log(this._operationStack);
      if(this._operationStack.length<0){
        throw ReferenceError("there is no operation to undo");
      }

      let counter = this._operationStack.length-1;
      let lastOperation = this._operationStack[counter];
      if(lastOperation.operationType === "undo"){
        for (const key in object) {
          delete object[key];
        }
        for (const key in lastOperation.prevState) {
          object[key] = lastOperation.prevState[key];
        }
      }
      else{
        throw ReferenceError("there is no operation to undo");
      }
      this._operationStack.pop();
      counter--;
      while(counter>=0 && this._operationStack[counter].operationType==="undo"){
        counter--;
      }
      this._operationStack.splice(counter+1, 0, lastOperation.cancelledOperation); 
      console.log(this._operationStack);
    }
	};
}
