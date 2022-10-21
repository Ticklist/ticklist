terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~>2.31.1"
    }
  }
  backend "azurerm" {
    resource_group_name  = "rg-ticklist-backend"
    storage_account_name = "storageticklistbackend"
    container_name       = "terraform-state"
    key                  = "ticklist.tfstate"
  }
}

provider "azurerm" {
  features {}
}

locals {
  tags = {
    "expireOn" = "2022-03-25"
    "owner"    = "matthaeus.heer@ipt.ch, matthias.staehli@ipt.ch"
  }
}

resource "azurerm_resource_group" "rg-ticklist" {
  name     = "rg-ticklist"
  location = "switzerlandnorth"
  tags     = local.tags
  lifecycle {
    ignore_changes = [
      tags
    ]
  }
}
